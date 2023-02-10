from flask import Flask, request, url_for, session, redirect
from flask_cors import CORS
from keras.models import load_model
from keras.utils import img_to_array, load_img
import base64
import numpy as np
from PIL import Image
import spotipy
import spotipy.oauth2 as oauth2 
import time
from sklearn.preprocessing import MinMaxScaler
import random

app = Flask(__name__)
CORS(app)

app.secret_key = "njsnJNLAC0cnds3"
app.config['SESSION_COOKIE_NAME'] = 'spotify-login-session'

client_id = "e3f413032cb541ed8781b8ae07d8c301"
client_secret = "dc28cf10199b4baaa3760db6491c8178"
TOKEN_INFO = "token_info"

model = load_model('models/mrfer_model.h5')
song_mood_model = load_model('models/mmp.h5')
emotion_dict = {0:'angry', 1:'disgust', 2:'fear', 3:'happy', 4:'sad', 5:'surprise', 6:'neutral'}
song_moods = {0:'calm', 1:'energetic', 2:'happy', 3:"sad"}
print("model Loading done")
saved_tracks = []
token = None


def predict_emotion(b64s):
  b64s = b64s.split(',')[1]
  with open("out.jpg", "wb") as f:
    f.write(base64.b64decode(b64s))

  img = load_img('out.jpg', color_mode='grayscale', target_size=(48,48))
  img = img_to_array(img)
  img = np.expand_dims(img, axis=0)
  img /= 255
  preds = model.predict(img)
  emotion = emotion_dict[preds[0].argmax()]

  return emotion




@app.route('/api/auth')
def login():
  print("login page")
  sp_oauth = create_spotify_oauth() 
  return redirect(sp_oauth.get_authorize_url())


@app.route('/redirect')
def redirectPage():
  print("redirect page");
  sp_oauth = create_spotify_oauth()
  session.clear()
  code = request.args.get('code')
  token_info = sp_oauth.get_access_token(code)
  global token
  token = token_info
  session[TOKEN_INFO] = token_info
  return redirect(url_for('getTracks', _external=True))


def create_spotify_oauth():
  redirect_uri = url_for('redirectPage', _external=True)
  return oauth2.SpotifyOAuth(client_id= client_id, client_secret =client_secret,redirect_uri= redirect_uri, scope='user-library-read')

@app.route('/api/getTracks')
def getTracks():
    try:
        token_info = get_token()
        print("token found")
    except:
        print("Can't find token in session")
        return redirect(url_for('login', _external=True))
        # return {"error": "no token", "data": []}
    sp = spotipy.Spotify(auth=token_info['access_token'])
    results = sp.featured_playlists(locale=None, country=None, timestamp=None, limit=10, offset=0)['playlists']['items']

    playlist_ids = []
    for i in results:
        playlist_ids.append(i['id'])

    tracks = []
    for i in playlist_ids:
        for j in sp.playlist_tracks(i,fields="items(track(id))")['items']:
            if j is None:
              continue
            elif j['track'] is None:
              continue
            elif j['track']['id'] is None:
              continue
            else:
              tracks.append(j['track']['id'])


    random.shuffle(tracks)
    

    tracks_info = sp.tracks(tracks[0:50])
    tracks_analysis = sp.audio_features(tracks[0:50])
    
    data = []
    pred_X = []
    for i in range(50):
        temp = {}
        temp2 = []
        temp['name'] =tracks_info['tracks'][i]['name'] 
        temp['album'] =tracks_info['tracks'][i]['album']['name'] 
        temp['artist'] =tracks_info['tracks'][i]['artists'][0]['name']
        temp['id'] =tracks_info['tracks'][i]['id']
        temp['releaseDate'] =tracks_info['tracks'][i]['album']['release_date']
        temp['popularity'] = tracks_info['tracks'][i]['popularity'] 
        temp['link']  = tracks_info['tracks'][i]['external_urls']['spotify']
        temp['imageUrl'] = tracks_info['tracks'][i]['album']['images'][0]['url']
        temp2.append(tracks_analysis[i]['danceability'])
        temp2.append(tracks_analysis[i]['acousticness'])
        temp2.append(tracks_analysis[i]['energy'])
        temp2.append(tracks_analysis[i]['instrumentalness'])
        temp2.append(tracks_analysis[i]['liveness'])
        temp2.append(tracks_analysis[i]['valence'])
        temp2.append(tracks_analysis[i]['loudness'])
        temp2.append(tracks_analysis[i]['speechiness'])
        temp2.append(tracks_analysis[i]['tempo'])
        # temp.append(tracks_analysis[i]['key'])
        # temp.append(tracks_analysis[i]['time_signature'])
        data.append(temp)
        pred_X.append(temp2)

    #data = sp.audio_features(tracks[0:50])

    # print(pred_X)

    pred_X = MinMaxScaler().fit_transform(pred_X)
    pred_X = np.array(pred_X)

    pred_Y = song_mood_model(pred_X)
    pred_Y = np.array(pred_Y)

    # print(pred_Y)

    mood = np.array([song_moods[i.argmax()] for i in pred_Y])

    for i in range(len(data)):
        data[i]['mood'] = mood[i]
        

    global saved_tracks
    saved_tracks = data
    print(saved_tracks)

    # pd.DataFrame(data,columns=["name","album","artist","id","release_date","popularity","image_url","danceability", "acousticness","energy","instrumentalness","liveness","valence", "loudness","speechiness","duration_ms","tempo","key","time_signature"]).to_csv('data.csv', index=False)
    return {"status": 200, "data": data, 'token': token_info}



def get_token():
    token_info = session.get(TOKEN_INFO, None)
    if not token_info:
        print("no tokennnn")
        raise "exception"
    
    now = int(time.time())
    is_token_expired = token_info['expires_at'] - now < 60
    if (is_token_expired):
        print("lololo")
        sp_oauth = create_spotify_oauth()
        token_info = sp_oauth.refresh_access_token(token_info['refresh_token'])
    return token_info




@app.route("/api/tracks", methods=['Post'])
def get_songs_based_on_emotion():
  req_data = request.get_json()
  b64s = req_data['img_b64s']
  emotion = predict_emotion(b64s)

  filtered_tracks = []
  global saved_tracks
  print(len(saved_tracks))

  for i in range(len(saved_tracks)):
    song_mood = saved_tracks[i]['mood'] 
    if(song_mood == 'happy' and (emotion == 'happy' or emotion == 'sad' or emotion == 'angry')):
      filtered_tracks.append(saved_tracks[i])
    elif(song_mood == 'sad' and (emotion == 'sad' or emotion == 'surprise' or emotion == 'neutral')):
      filtered_tracks.append(saved_tracks[i])
    elif(song_mood == 'energetic' and (emotion =='happy' or emotion == 'fear' or emotion == 'disgust' or emotion == 'neutral')):
      filtered_tracks.append(saved_tracks[i])
    elif(song_mood == 'calm' and (emotion == 'fear' or emotion == 'angry' or emotion == 'neutral' or emotion =='surprise')):
      filtered_tracks.append(saved_tracks[i])  

  print(filtered_tracks)
  return {"status": 200, "emotion": emotion, 'data': filtered_tracks}
  


if __name__ == "__main__":
  app.run(debug=True)
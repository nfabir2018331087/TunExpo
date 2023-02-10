# AI Project - Group 09

This is a repository for Artificial Intelligence Lab(CSE 338) project of Group 09.

## Project Title: TunExpo

A music recommendation system based on facial emotion recognition. Mainly this project is done using deep learning. In terms of building website, Javascript(React) and Python(Flask) frameworks are used for frontend and backend respectively. Spotify API is used for whole music purpose.

## How to run the project

**Following instructions are only for windows operating system.**

### API:

1. We are using Spotify API. To use it you need to create your own spotify developer account [here](https://developer.spotify.com/dashboard/) 
2. After creating an account, you need a create a project in it.
3. The project will have it's own client_id and client_secret. Which will be used in the backend.
4. You also need to specify the redirect_url in settings->add whitelist
5. For more clear information you could check the [official guide](https://developer.spotify.com/documentation/web-api/quick-start/)

### Backend:

*** Please use your own client_id,client_secret and redirect_url from the API section and replace them inside of `server.py` file ***
1. The backend is built with flask. So make sure you have python installed in your system. The latest version doesn't work with tensorflow. We recommend version 3.10.10. You should install the 64-bit version. You can download this from [link](https://www.python.org/downloads/release/python-31010/ "python").
2. Open command prompt and cd to the backend directory of this project. `cd <path\to\backend>`.
3. Create a python virtual environment with this command: `python -m venv venv`.
4. Activate the virtual environment. `<path\to\backend>\venv\Scripts\activate`.
5. You need to install the following packages with: `pip install <package_name>`
   - flask
   - flask_cors
   - tensorflow
   - numpy
   - pillow
   - spotipy
   - scikit-learn
6. Run the command `python server.py` to start the server on port 5000(default).
7. \***\*Important**. To be able to fetch songs from spotify api, the server needs an api access token. Open a new brower tab and go to **"localhost:5000/api/auth"**. This will prompt the user to sign in with their spotify account. After successful sign in, the server will receive the access token. **You should always perform this step before opening up the frontend.**


### Frontend:

1. Fontend is developed using React JS(version : ^18.2.0 ) . You must have (Node JS) in your system .
2. Open  the terminal and  paste it "cd/Tune.Expo-Music-recommender-App"
3. Then run "npm install"
4. Make sure backend is runnug then run  "npm start" for starting the frontend

## Group Members:

1. **Amir Hamza**  
   Reg No: 2018331011
2. **MD. Abdul Kadir**  
   Reg No: 2018331055
3. **Nafis Fuad Abir**  
   Reg No: 2018331087
4. **Ahmadul Hasan**  
   Reg No: 2018331109
5. **Muhit Mahmud**  
   Reg No: 2018331113
   
## Supervisor

#### Enamul Hassan  
Assistant Professor,  
Department of CSE, SUST


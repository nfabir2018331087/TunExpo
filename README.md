# AI Project - Group 09

This is a repository of Group 9 for Artificial Intelligence project of CSE 338 course.

## Project Title: TunExpo

A music recommendation system based on facial emotion recognition using deep learning.

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

## How to run the project

**Following instructions are only for windows operating system.**

### Backend:

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


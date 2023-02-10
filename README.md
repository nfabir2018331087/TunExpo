# project-group_09

project-group_09 created by GitHub Classroom

## How to run the project

**Following instructions are only for windows operating system.**

#### Backend:

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

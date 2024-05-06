from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS
from flask_jwt_extended import JWTManager


app = Flask(__name__)
dbpath = os.path.abspath(os.path.dirname(__file__))
login_manager = LoginManager(app)
bcrypt = Bcrypt(app)
cors = CORS(app)
jwt = JWTManager(app)


app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'c0bb15fe1695e83229b64ba96f70d1f8f7c915a5be6476b6829b96fc84079176'
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+ os.path.join(dbpath, 'userdata.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_PREMANT'] = False


db = SQLAlchemy(app)

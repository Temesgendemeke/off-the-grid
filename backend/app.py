from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from flask_bcrypt import Bcrypt
from flask_cors import CORS


app = Flask(__name__)
dbpath = os.path.abspath(os.path.dirname(__file__))
bcrypt = Bcrypt(app)
cors = CORS(app)



app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'c0bb15fe1695e83229b64ba96f70d1f8f7c915a5be6476b6829b96fc84079176'
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_PREMANT'] = False


db = SQLAlchemy(app)

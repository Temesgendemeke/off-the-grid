from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
dbpath = os.path.abspath(os.path.dirname(__file__))


app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+ os.path.join(dbpath, 'userdata.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
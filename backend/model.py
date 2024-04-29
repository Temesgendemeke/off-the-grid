from config import db, app
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80))
    todos = db.relationship('Todos', backref='user')
    timer = db.relationship('Timer', backref='user')
    
class Todos(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    taskname = db.Column(db.String(120), nullable=False)
    set_date = db.Column(db.DateTime, default=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
class Timer(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    Totaltime = db.Column(db.Float)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    
    
    
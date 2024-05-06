from config import db, app
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)
    todos = db.relationship('Todos', backref='user')
    timer = db.relationship('Timer', backref='user')
    
    def __repr__(self) -> str:
        return f'<{self.name}>'
    
class Todos(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    taskname = db.Column(db.String(120), nullable=False)
    set_date = db.Column(db.DateTime, default=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    is_completed = db.Column(db.Boolean, nullable=False, default=False)
    
    def __repr__(self) -> str:
        return f'<{self.taskname}>'
        
    
class Timer(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    Totaltime = db.Column(db.Float)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    def update_total(self, newtime, id):
        timer = Timer.query.filter_by(user_id = id).first()
        timer.Total += newtime
        db.session.commit()

        
        

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    
    
    
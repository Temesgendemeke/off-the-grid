from config import app,db
from model import User, Todos, Timer
from flask import jsonify


@app.route('/')
def homepage():
    return "homepage"


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

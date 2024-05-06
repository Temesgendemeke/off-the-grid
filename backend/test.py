from config import db, app
from model import User, Todos, Timer

id=1
with app.app_context():
    user = db.session.query(User, Todos, Timer).join(Todos, User.id == Todos.user_id).\
            join(Timer, Todos.user_id == Timer.user_id).filter_by(user_id = id).all()
    print(user)

    for userdata, tododata, timerdata in user:
        print(userdata.name)
        print(tododata.taskname)
        print(timerdata.Totaltime)
    

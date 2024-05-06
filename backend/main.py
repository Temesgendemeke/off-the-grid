from app import app,db,bcrypt, login_manager, jwt
from model import User, Todos, Timer
from flask import jsonify, request
from flask import session

@app.route('/')
def homepage():
    return "homepage"

@app.route('/signup', methods=["POST", "GET"])
def signup():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    hashedpassword = bcrypt.generate_password_hash(password)
    
    
    userExist = User.query.filter_by(email=email).first() is not None
    if userExist:
        return jsonify({
            "error":"User already exist"
        }), 409
    
    new_user = User(name=name, email=email, password=hashedpassword)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
        'name':new_user.name,
        'email': new_user.email,
        'id': new_user.id
    })
    

@app.route('/login', methods=["POST"])
def login():
    email = request.json['email']
    password = request.json['password']
    
    user =  User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({
            "error": "user doesnt exist"
        }), 401
        
    if not bcrypt.check_password_hash(user.password, password):
        
        return jsonify({
            "error": "check your password"
        }), 401

    return jsonify({
        "name": user.name,
        "email": user.email,
        "id":user.id
    })

    
@app.route('/dashboard/<int:id>')
def dashboard(id):
    user = db.session.query(User,Todos,Timer).\
             join(Todos, User.id == Todos.user_id).\
             join(Timer, Timer.user_id == Todos.user_id).\
             filter_by(user_id = id).all()
             
             
    return jsonify([{
       'name': username.name,
       'email': username.email,
       'totaltime': timer.Totaltime,
       "todos": todos.taskname,
        }for username, todos, timer in user])
        
@app.route('/updatetotal/<int:id>', methods=['POST'])
def update_totaltime(id):
    user = User.query.get(id)
    update_timer = request.json['totaltime']
    timer = Timer.query.filter_by(user_id = id).first()
    if timer is None:
        newtimer = Timer(Totaltime=update_timer, user=user)
        db.session.add(newtimer)
        db.session.commit()
        return jsonify({
        "totaltime": newtimer.Totaltime
        }), 200

    timer.Totaltime += update_timer
    db.session.commit()
    return jsonify({
        "totaltime": timer.Totaltime
    }), 200
    
@app.route('/add_tods/<int:id>', methods=['POST'])
def todos(id):
    user = User.query.get(id)
    taskname = request.json['taskname']
    is_completed = request.json['is_completed']
    task = Todos(taskname=taskname, is_completed=is_completed, user=user)
    db.session.add(task)
    db.session.commit()
    return jsonify({
        "message": "todos added to database successfuly"
    }), 200

@app.route('/update_todo', methods=['PATCH'])
def update_todos():
    taskname = request.json['taskname']
    is_completed = request.json['is_completed']
    todoname = Todos.query.filter_by(taskname=taskname).first()
    todoname.is_completed = is_completed
    db.session.commit()
    return jsonify({
        "message":"updated"
    }), 200
     

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

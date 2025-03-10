from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []

# TO DO Post IT App REST SETUP
@app.route('/api/tasks',methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/api/tasks',methods=['POST'])
def add_task():
    task = request.json
    tasks.append(task)
    return jsonify(task), 201

@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return '', 204

# Starter Code
@app.route('/api/data')
def get_data():
    data = {
        'title': 'Welcome to Angular-Python App,Hoping this Works!!!',
        'message': 'This is an example integration between Angular and Flask!\n LOREM IPSUM DOLOR AMET'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

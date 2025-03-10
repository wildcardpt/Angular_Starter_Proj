from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def get_data():
    data = {
        'title': 'Welcome to Angular-Python App,Hoping this Works!!!',
        'message': 'This is an example integration between Angular and Flask!\n LOREM IPSUM DOLOR AMET'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

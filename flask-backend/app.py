from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Flask Backend is running!", "status": "ok"})

@app.route('/api/data')
def get_data():
    return jsonify({
        "items": [
            {"id": 1, "name": "Item One"},
            {"id": 2, "name": "Item Two"},
            {"id": 3, "name": "Item Three"}
        ]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

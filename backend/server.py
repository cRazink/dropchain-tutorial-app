from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

def handle_api_request(url, data):
    headers = {
        'Content-Type': 'application/json',
        'X-API-Key': '<Your API Key>',
    }
    response = requests.post(url, headers=headers, json=data)
    return response.json(), response.status_code

@app.route('/v1/<path:route>', methods=['POST'])
def catch_all(route):
    url = f'https://api.dropchain.network/v1/{route}'
    data = request.get_json()
    return handle_api_request(url, data)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001)

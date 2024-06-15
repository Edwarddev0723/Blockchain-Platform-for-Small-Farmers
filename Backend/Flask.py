from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def save_to_json(data):
    try:
        with open('products.json', 'w') as f:
            json.dump(data, f, indent=4)
    except IOError as e:
        print(f"Error saving file: {e}")

def load_products_from_json():
    try:
        with open('products.json', 'r', encoding='utf-8') as file:
            return json.load(file)
    except IOError:
        print("File not found, creating a new one.")
        return []
    except json.JSONDecodeError:
        print("Error decoding JSON, starting with an empty list.")
        return []

@app.route('/api/products', methods=['GET'])
def get_products():
    products = load_products_from_json()
    return jsonify(products)

@app.route('/api/products/create', methods=['POST'])
def create_product():
    data = request.json
    if 'name' not in data or 'price' not in data:
        return Response("Missing 'name' or 'price' in the request", status=400)
    products = load_products_from_json()
    products.append(data)
    save_to_json(products)
    return Response(status=201)

if __name__ == '__main__':
    app.run(debug=True)
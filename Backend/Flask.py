from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['uploads'] = UPLOAD_FOLDER

# 讀取JSON檔案
def load_products_from_json():
    with open('products.json', 'r', encoding='utf-8') as file:
        products_data = json.load(file)
    return products_data

# 返回所有產品信息
@app.route('/api/products', methods=['GET'])
def get_products():
    products = load_products_from_json()
    return jsonify(products)

# 創建新產品
@app.route('/api/products/create', methods=['POST'])
def create_product():
    data = request.json
    products = load_products_from_json()
    products.append(data)
    save_to_json(products)  # 將更新後的數據寫入JSON檔案
    return Response(status=201)

# 將數據寫入JSON檔案
def save_to_json(data):
    with open('products.json', 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == '__main__':
    app.run(debug=True)

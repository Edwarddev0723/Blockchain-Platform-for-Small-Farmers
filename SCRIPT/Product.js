// 在 Product.js 中使用 jQuery 的 AJAX 方法讀取 JSON 檔案
$(document).ready(function() {
    $.getJSON('products.json', function(data) {
        console.log(data);
        // data 是 JSON 檔案中的商品陣列
        var productGrid = document.getElementById('product-grid');

        // 遍歷每個商品
        data.forEach(function(product) {
            // 創建商品元素的 HTML
            var productHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>價格: ${product.price} 元</p>
                    <button onclick="addToCart(${product.id})">加入購物車</button>
                </div>
            `;

            // 將商品 HTML 加入到 product-grid 中
            productGrid.innerHTML += productHTML;
        });
    });
});

// 在此定義加入購物車的函式
function addToCart(productId) {
    // 在這裡加入你的加入購物車邏輯
    alert('已加入購物車: ' + productId);
}
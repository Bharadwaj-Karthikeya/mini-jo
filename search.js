let products = document.querySelectorAll('.product-list');
let params = new URLSearchParams(window.location.search);
let query = params.get('q');

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    let productList = data.products;
    let filteredProducts = productList.filter(product =>{
        return product.title.toLowerCase().includes(query.toLowerCase());
    }); 
    
    filteredProducts.forEach(product => {
        products.forEach(productList => {
            let productItem = document.createElement('div');
            productItem.classList.add('item');
            productItem.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>                
            `;
            productList.appendChild(productItem);
        });
    });
});
let products = document.querySelectorAll('.product-list');

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    data.products.forEach(product => {
        products.forEach(productList => {
            let productItem = document.createElement('div');
            productItem.classList.add('item');
            productItem.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
            `;
            productList.appendChild(productItem);
            productItem.addEventListener("click", () => {
                console.log(product.id, "clicked");
                window.location.href = `product.html?id=${product.id}`;
            });
        });
       
    });
});

const searchBtn = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];

    const exists = history.some(item => item.query.toLowerCase() === query.toLowerCase());
    
    if (!exists) {
        history.push({
            query: query,
            time: Date.now()
        });
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }

    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    searchInput.value = '';
});

const suggestionsDiv = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    

    const matches = history.filter(item => 
        item.query.toLowerCase().includes(query)
    );
    // console.log(matches);
    suggestionsDiv.innerHTML = '';

    matches.forEach(match => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = match.query;
        suggestionsDiv.appendChild(suggestionItem);
        suggestionItem.addEventListener('click', () => {
            searchInput.value = match.query;
            suggestionsDiv.innerHTML = '';
            searchBtn.click();
        });
    });
});
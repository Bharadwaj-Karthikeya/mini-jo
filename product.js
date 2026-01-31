// Loads and renders the detailed product view for product.html.
let params = new URLSearchParams(window.location.search);   
let productId = params.get('id');

fetch(`https://dummyjson.com/products/${productId}`)
.then(res => res.json())
.then(product => {
    let detailDiv = document.getElementsByClassName('container')[0];
    
    detailDiv.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}" />
    <div class="details">
        <h2 id="title">${product.title}</h2>
        <p id=availability_status>${product.availabilityStatus}</p>
        <p id=price>Rs.${product.price}</p>
        <p id=desc>${product.description}</p>
        <p id=rating>Rating: ${product.rating}</p>
    
    <ul id="additional_info" style="list-style-type:none; padding:0;">
        <li><b>Brand:</b> ${product.brand}</li>
        <li><b>Category:</b> ${product.category}</li>
        <li><b>Stock:</b> ${product.stock}</li>
        <li><b>Discount Percentage:</b> ${product.discountPercentage}%</li>
        <li><b>SKU:</b> ${product.sku}</li>
        <li><b>Weight:</b> ${product.weight}</li>
        <li><b>Warranty:</b> ${product.warrantyInformation}</li>
        <li><b>Return Policy:</b> ${product.returnPolicy}</li>
        <li><b>Shipping:</b> ${product.shippingInformation}</li>
        <li><b>Stock:</b> ${product.stock}</li>
        <li><b>Minimum Order Quantity:</b> ${product.minimumOrderQuantity}</li>
        <li><b>Shipping:</b> ${product.shippingInformation}</li>
    </ul>
    </div>
    `;
});

// // {
//     "id": 2,
//     "title": "Eyeshadow Palette with Mirror",
//     "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
//     "category": "beauty",
//     "price": 19.99,
//     "discountPercentage": 18.19,
//     "rating": 2.86,
//     "stock": 34,
//     "tags": [
//         "beauty",
//         "eyeshadow"
//     ],
//     "brand": "Glamour Beauty",
//     "sku": "BEA-GLA-EYE-002",
//     "weight": 9,
//     "dimensions": {
//         "width": 9.26,
//         "height": 22.47,
//         "depth": 27.67
//     },
//     "warrantyInformation": "1 year warranty",
//     "shippingInformation": "Ships in 2 weeks",
//     "availabilityStatus": "In Stock",
//     "reviews": [
//         {
//             "rating": 5,
//             "comment": "Great product!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Savannah Gomez",
//             "reviewerEmail": "savannah.gomez@x.dummyjson.com"
//         },
//         {
//             "rating": 4,
//             "comment": "Awesome product!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Christian Perez",
//             "reviewerEmail": "christian.perez@x.dummyjson.com"
//         },
//         {
//             "rating": 1,
//             "comment": "Poor quality!",
//             "date": "2025-04-30T09:41:02.053Z",
//             "reviewerName": "Nicholas Bailey",
//             "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
//         }
//     ],
//     "returnPolicy": "7 days return policy",
//     "minimumOrderQuantity": 20,
//     "meta": {
//         "createdAt": "2025-04-30T09:41:02.053Z",
//         "updatedAt": "2025-04-30T09:41:02.053Z",
//         "barcode": "9170275171413",
//         "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
//     },
//     "images": [
//         "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
//     ],
//     "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
// }
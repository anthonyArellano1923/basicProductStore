class Product {
    constructor(id, name, price, image, description, category) {
      this.id = id;  
      this.name = name;
      this.price = price;
      this.image = image;
      this.description = description;
      this.category = category;
    }

    showProduct() {
      console.log(this.name, this.price, this.image);
    }
}

const productsCardsContainer = document.querySelector('.products')
const productsList = [];
const productQuantity = 2

function sendHTTPRequest(method, url, data) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers:
      { 'content-type': 'application/json' }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      } else {
        return response.json();
      }
    })
}

async function fetchProducts() {
  const allRawProducts = await sendHTTPRequest("GET", "https://fakestoreapi.com/products")
  for(const rawProduct of allRawProducts) {
    const product = new Product(id=rawProduct.id, name=rawProduct.title, price=rawProduct.price, image=rawProduct.image, description=rawProduct.description, category=rawProduct.category);
    productsList.push(product);    
  }
  console.log(productsList);
  return productsList;
}



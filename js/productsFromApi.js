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

const products = [];

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
  const allRawProducts = await sendHTTPRequest("GET", "https://api.escuelajs.co/api/v1/products")
  for(const rawProduct of allRawProducts) {
    const product = new Product(rawProduct.id, rawProduct.title, rawProduct.price, rawProduct.images[0], rawProduct.description, rawProduct.category);
    products.push(product);
  }
}


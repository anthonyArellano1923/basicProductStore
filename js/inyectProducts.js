function chartProductsHTML (product){
  //Card container
    const productArticle = document.createElement('article');
    productArticle.classList.add('cards-container__card')
    //Card Image and quantity counter container
      const divImage = document.createElement('div');
      divImage.classList.add("card__product-image")
      //Quantity counter div
        const divQuantity = document.createElement('div');
        divQuantity.classList.add("card__product-image--quantity")
            //Quantity counter
              const quantity = document.createElement('span');
              quantity.classList.add("product-quantity")
              quantity.textContent = productQuantity;
        divQuantity.append(quantity);
      //Image container
        const figureContainer = document.createElement('figure');
        figureContainer.classList.add("card__product-image--img");
          //Product Image
            const productImage = document.createElement('img');
            productImage.alt = "product.image"
            productImage.src = product.image
        figureContainer.append(productImage);
      divImage.append(divQuantity, figureContainer);
  
    //Card Description container
      const descriptionContainer = document.createElement('div');
      descriptionContainer.classList.add("card__product-description")
        //Product Name
          const productName = document.createElement('p')
          productName.classList.add("card_product-description--product-name")
          productName.textContent = product.name;
        //Product Price
          const productPrice = document.createElement('p')
          productPrice.classList.add("card_product-description--product-price")
          productPrice.textContent = product.price;
      descriptionContainer.append(productName, productPrice)
  
    //Card Total container
      const totalContainer = document.createElement('div');
      totalContainer.classList.add("card__total")
        //Delete product figure container
          const deleteProductContainer = document.createElement('figure');
          deleteProductContainer.classList.add("card__total--delete")
            //Delete product image
              const deleteProduct = document.createElement('img');
              deleteProduct.classList.add("delete-product")
              deleteProduct.alt = "delete-product"
              deleteProduct.src = "#"
          deleteProductContainer.append(deleteProduct)
        //Product Total
          const productTotal = document.createElement('p')
          productTotal.classList.add("card__total--product-total-price")
          productTotal.textContent = product.price * productQuantity;
      totalContainer.append(deleteProductContainer, productTotal)
  
    productArticle.append(divImage, descriptionContainer, totalContainer)
    // console.log(productArticle)
    return productArticle;
  }
async function getProducts() {
  const productsInChart = await fetchProducts() //client.productsInChart
  const chartCardsContainer = document.querySelector('.cards-container')
  productsInChart.forEach(product => {
    const productArticle = chartProductsHTML(product);
    chartCardsContainer.append(productArticle);
  })
  const totalPrice = document.querySelector('.nav__total-price--amount')
  totalPrice.textContent = productsInChart.reduce((acc, product) => acc + product.price, 0)
}
getProducts()


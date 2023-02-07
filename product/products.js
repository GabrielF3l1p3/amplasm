function createProduct(image, product, about) {
    return `
    <div class="box-product">
    <div class="image">
      <img src="image-product/${image}.png" alt="${image}">
    </div>
    <div class="product-text">
      <h3>${product}</h3>
      <p>${about}</p>
    </div>
    <a href="#contact"><button>Orçamento</button></a>
  </div>
  `
};

document.querySelector('.all-products').innerHTML = 
    createProduct('guiadora-haste', 'Polia Guiadora c/ haste', 'Polia de 18mm x 100mm com Haste. Utilizado para portas industriais PCF.') +
    createProduct('suspensora', 'Polia Suspensora', 'Polia de 38mm x 100mm com eixo. Utilizado para portas industriais PCF.') +
    createProduct('guiadora', 'Polia Guiadora', 'Polia de 18mm x 100mm com eixo. Utilizado para portas industriais PCF.') +
    createProduct('selecionador-de-folhas', 'Selecionador de folhas', 'Selecionador de folhas para porta corta fogo') +
    createProduct('calco-cunha', 'Calço cunha', 'Calço para portas industriais PCF');
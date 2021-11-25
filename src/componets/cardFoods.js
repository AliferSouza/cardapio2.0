function cardFoods(dados) {
   
  let cardFoods = ``;
  dados.forEach((dado) => {    
    cardFoods += `
        <div class="food ${dado.Id}">
    <div class = "food-img">
        <img src = "${dado.Imagem}" alt = "food image">
        <span>
            <i class = "far fa-heart"></i>
        </span>
        <h3 class = "food-rate">${dado.Preço}</h3>
    </div>

    <div class = "food-content">
        <h2 class="Titulo">${dado.Titulo}</h2>
        <p class="Descrição">${dado.Descrição}</p>
        <div class = "food-info">
            <div>
                <i class = "fas fa-fire"></i>
                <p>${dado.Infocaloria}</p>
            </div>
            <span>${dado.Categoria}</span>
        </div>

        <div class = "food-price-calc">
            <h2 class = "food-total"></h2>
            <div class = "food-quantity">
                <div class = "order-dec center">
                    <i class = "fas fa-minus"></i>
                </div>
                <div class = "order-val center">0</div>
                <div class = "order-inc center">
                    <i class = "fas fa-plus"></i>
                </div>
            </div>
        </div>
    </div>
</div>
`;
  });


  return cardFoods;
}
export default cardFoods;

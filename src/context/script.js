setTimeout(function Run() {
  const totalValores = [];
  
  const allFood = document.querySelectorAll(".food");
  allFood.forEach((food) => {
    food.querySelector(".food-total").textContent = "$ 0.00";
  });

  allFood.forEach((food, index) => {
    food.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("order-dec") ||
        event.target.parentElement.classList.contains("order-dec")
      ) {
        changeOrder(food, "dec");
      }

      if (
        event.target.classList.contains("order-inc") ||
        event.target.parentElement.classList.contains("order-inc")
      ) {
        changeOrder(food, "inc");
      }
    });
  });

  function changeOrder(food, changeType) {
    let foodQuan = parseInt(food.querySelector(".order-val").textContent);
    let foodPrice = parseFloat(
      food.querySelector(".food-rate").textContent.replace(/[^\d.-]/g, "")
    );

    if (changeType === "dec" && foodQuan > 0) foodQuan--;
    if (changeType === "inc") foodQuan++;

    food.querySelector(".order-val").textContent = foodQuan;
    food.querySelector(".food-total").textContent = `${(
      foodQuan * foodPrice
    ).toFixed(2)}`;
    //-------------------------------------------------------------------------------------

    const Titulo = food.querySelector(".Titulo").textContent;
    const totalUnidade = food.querySelector(".food-total").textContent;
    const Quantidade = food.querySelector(".order-val").textContent;
    

    let pegarValores = [Titulo, totalUnidade, Quantidade];

    totalValores.push(pegarValores);

    localStorage.setItem("pegarValores", JSON.stringify(totalValores));

    //--------------------------------------------------------------------------------------
    let total = [];
    const itens = document.querySelectorAll(".food-total");
    itens.forEach(function (item) {
      total.push(parseFloat(item.textContent));
    });

    const totalintens = total.reduce(function (total, item) {
      return (total += item || 0);
    }, 0);

    const totalintenss = totalintens.toFixed(2);
    document.querySelector(".button-total").textContent = totalintenss;

    //--------------------------------------------------------------------
  }

  document.querySelector(".button").addEventListener("click", function () {
    let storageValue = JSON.parse(localStorage.getItem("pegarValores"));
    var idade=prompt("Digite o némero da MESA: ");

    const foodObj = {};

    for (const food of storageValue) {
      [
        (foodObj[food[0]] =  food[0] + " " + food[1] + " Quantidade: " + food[2] + " Mesa: " + idade),
      ];
    }

    console.log(foodObj)

    

    let ListaWhats = [];
    for (let key in foodObj) {
      ListaWhats.push(foodObj[key]);
    }

 


    //window.open(
    //  "https://api.whatsapp.com/send?phone=5531993253883&text=" + ListaWhats
   // );

    localStorage.removeItem("pegarValores");
  });


}, 1000);

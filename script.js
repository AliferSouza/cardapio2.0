setTimeout(function RUN() {
 


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
 
}



function total() {  
  let total = []
  const itens = document.querySelectorAll(".food-total")
  itens.forEach(function(item){
    total.push(parseFloat(item.textContent))
  });

  const totalintens = total.reduce(function (total, item) {
      total += item;
      return total; 
  
  },0)

  //const totalintens = totalintens.toFixed(2)


}

},2000);


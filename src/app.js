import API from './api/api.js'
import cardFoods from './componets/cardFoods.js'
import Header from './componets/header.js'
import Button from './componets/button.js'

let dados = await API();



const cardfoods = document.querySelector(".foods");
const header = document.querySelector(".header");
const button = document.querySelector(".button");


const App = () => {    
    button.innerHTML = Button()
    header.innerHTML = Header()
    cardfoods.innerHTML = cardFoods(dados.foods)
   
}


export { App }
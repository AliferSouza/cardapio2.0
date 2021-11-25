import API from './api/api.js'
import cardFoods from './componets/cardFoods.js'

let dados = await API();

const cardfoods = document.querySelector(".foods");



const App = () => {    

    cardfoods.innerHTML = cardFoods(dados.foods)
   
}


export { App }
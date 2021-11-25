
import cardFoods from './componets/cardFoods.js'


const cardfoods = document.querySelector(".foods");

let url = '../../api.json';


const App = () => {    
    fetch(url).then(response => response.json())
    .then(data => {
        cardfoods.innerHTML = cardFoods(data.foods)
          
    }).catch(e => { console.log("ERRO" + e) })
    
    
   
}


export { App }
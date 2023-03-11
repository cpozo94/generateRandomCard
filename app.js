//definimos primero las variables que vamos a utilizar 
let container = document.querySelector(".container")
let card = document.querySelector(".card")
let button = document.querySelector(".button")
let width = document.querySelector("#width")
let height = document.getElementById("height")
let enviar = document.getElementById("btnEnviar")

//función para generar la carta aleatoria
let randomSuit = () => {
    let suit = ["hearts", "diamonds", "spades", "clubs"];
    let idxSuit = Math.floor(Math.random() * suit.length);
    return suit[idxSuit];
}


//número aleatorio
let randomNumber = () => {
    let numbers =["A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    ];
    let idxNumber = Math.floor(Math.random()* numbers.length)
    return numbers[idxNumber]
}

//función que genera una nueva carta
const generateRandomCard = () => {
    return (container.innerHTML = 
        `<div class="card ${randomSuit()}">
            <span class="center">${randomNumber()}</span>
        </div>        
        `)
}

//cada vez que se pulsa el botón, se activa la función
button.addEventListener("click",generateRandomCard)

let updateHeightWidthBtn = document.querySelector("#update-height-width-btn");

//accedemos al botón definido arriba y modificamos card (previamente definido tb),
updateHeightWidthBtn.addEventListener("click", () => {
  card = document.querySelector(".card")
  card.style.height = `${height.value}px`;
  card.style.width = `${width.value}px`;
});




//lo que sucede cada vez que la página se recarga, se ha generado una carta
//cada X tiempo se genera una nueva carta
window.onload = () => {
    generateRandomCard();
    setInterval(()=>{
        generateRandomCard();},10000);
    
};


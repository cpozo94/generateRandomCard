//definimos primero las variables que vamos a utilizar 
const container = document.querySelector(".container")
const card = document.querySelector(".card")
const button = document.querySelector(".button")
const width = document.getElementById("width")
const height = document.getElementById("height")
const enviar = document.getElementById("btnEnviar")


//"px"



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


//lo que sucede cada vez que la página se recarga
window.onload = () => {
    generateRandomCard();
    setInterval(()=>{
        generateRandomCard();},10000);
    
};


const figuresColor = ["cyan", "magenta", "black", "yellow"];
const bgColor = ["cyan", "magenta", "black", "yellow"];

let figures = document.querySelectorAll("section>div");
let header = document.querySelectorAll("header>div");

figures = [...figures]; // pobrana lista query na tablice

const startTime = new Date().getTime();
const positionbg = Math.floor(Math.random()*bgColor.length);

let activeColor = ''; // aktulanie aktywny kolor
const clickedColor = [bgColor[positionbg]];
let element = document.getElementById("color");
element.innerHTML = `${bgColor[positionbg]}`;
let colorResult = 0;


const clickColor = function(){
    activeColor = this;
   
    clickedColor[1] = activeColor;
    if(clickedColor[0] == clickedColor[1].className) {
        colorResult++;
    if (colorResult == 1) {
        const endTime = new Date().getTime();
        const gameTime = Math.round(((endTime - startTime)/1000)*100)/100;
        let scoreo = document.getElementById("score");
        scoreo.innerHTML = `Bravo! You found a ${clickedColor[0]} squere in ${gameTime} seconds!`;
        // alert(`Bravo! You found a ${clickedColor[0]} squere in ${gameTime} seconds!`) 
        setTimeout(function () {
            location.reload();
        }, 1000)
        
    }
        };
            
    
};
    
const init = () => {
    header.forEach(head => {
        head.classList.add(clickedColor);})
    figures.forEach(figure => {
        const position = Math.floor(Math.random()*figuresColor.length);
        figure.classList.add(figuresColor[position]); // dodawanie wylosowanej klasy, jako index wylosowana wartość
        figuresColor.splice(position, 1);
    })
  
}
const klik = () => {
    figures.forEach(figure => {
    figure.addEventListener('click', clickColor)})
    
}


init()
klik()
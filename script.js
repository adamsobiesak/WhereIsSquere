const figuresColor = ["cyan", "magenta", "black", "yellow"];
const bgColor = ["cyan", "magenta", "black", "yellow"];

let figures = document.querySelectorAll("section>div");
let header = document.querySelectorAll("header>div");

figures = [...figures]; // pobrana lista query na tablice

const startTime = new Date().getTime();
const positionbg = Math.floor(Math.random()*bgColor.length);

let activeColor = ''; // aktulanie aktywny kolor
const clickedColor = [bgColor[positionbg]];

const colorMatch = 1;
let colorResult = 0;


const clickColor = function(){
    activeColor = this;
   
    clickedColor[1] = activeColor;

        console.log(clickedColor);
    if(clickedColor[0] == clickedColor[1].className) {
        console.log('wygrana');
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
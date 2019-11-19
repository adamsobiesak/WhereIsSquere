const figuresColor = ["red", "green", "blue", "yellow"];

let figures = document.querySelectorAll("div.figure");
figures = [...figures]; // pobrana lista query na tablice

const init = () => {
    figures.forEach(function(figure){
        const position = Math.floor(Math.random()*figuresColor.length);
        figure.classList.add(figuresColor[position]);
    })
}

init()
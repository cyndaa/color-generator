const button = document.querySelector('button');
const h1 = document.querySelector('h1');


button.addEventListener('click', function(){
    const newColor = randomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if (r < 150 && g < 150 && b < 150 ){
        h1.style.color = "white";
        button.style.color = "white";
    }
    else{
        h1.style.color="black";
        button.style.color = "black";
    }

    return `rgb(${r}, ${g}, ${b})`
}


const rectangle = document.getElementById('rectangle');
var colors = ["blue", "green", "#ed30cf", "yellow", "red"];
var colorId = 0;

rectangle.addEventListener('click', () => { 
    rectangle.style.backgroundColor = colors[colorId];

    if(colorId < 4){
        colorId += 1;
    }
    else{
        colorId = 0;
    }
});
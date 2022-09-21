var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

c.addEventListener('mousedown', () => {
    console.log("clicou");
});

c.addEventListener('mouseup', () => {
    console.log('soltou');
});

c.addEventListener('mousemove', () => {
    console.log("1");
});



function testeOut(){
    console.log("Out");
}


//circulo
// ctx.arc(78, 78, 60, 0, 7);
// ctx.stroke();

// //linha
// ctx.moveTo(10,45);
// ctx.lineTo(255,35);
// ctx.stroke();


// //retangulo
// ctx.rect(20, 20, 150, 50);
// ctx.stroke();
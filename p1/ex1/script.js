const button = document.getElementById("button");

function saveValue() {
    return document.getElementById("valueInReal");
}

function convert(value){
    return parseFloat(value.value) * 5.26;
}

function write(real, dolar){
    var element = document.getElementById("element")
    text = document. createTextNode("R$:" + real + " = $:" + dolar + "  ");
    element.appendChild(text);
}

button.addEventListener('click', () =>{
    let valueInReal = saveValue();
    let valueInDolar = convert(valueInReal);
    write(valueInReal.value, valueInDolar);
});

document.getElementById('valueInReal').onkeypress = function(e){
    if(e.keyCode == 13){
        let valueInReal = saveValue();  
        let valueInDolar = convert(valueInReal);
        write(valueInReal.value, valueInDolar);
        e.preventDefault();    
    }   
}


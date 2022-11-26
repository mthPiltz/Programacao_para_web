$(document).ready(function () {
    const button1 = document.getElementById('1');
    const button2 = document.getElementById('2');
    const button3 = document.getElementById('3');
    const button4 = document.getElementById('4');
    const button5 = document.getElementById('5');
    const button6 = document.getElementById('6');
    const button7 = document.getElementById('7');
    const button8 = document.getElementById('8');
    const button9 = document.getElementById('9');
    const button0 = document.getElementById('0');
    const buttonSum = document.getElementById('+');
    const buttonSub = document.getElementById('-');
    const buttonMult = document.getElementById('*');
    const buttonDiv = document.getElementById('/');
    const buttonEqual = document.getElementById('=');
    const buttonC = document.getElementById('c');

    var operacao = [''];
    var posicaoOperacao = 0;

    buttonC.addEventListener('click', ()=> {
        operacao = [''];
        posicaoOperacao = 0;
        console.log(operacao);
    })

    button0.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (+button0.innerText);
        console.log(operacao)
    })

    button1.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button1.innerText);
        console.log(operacao)
    })

    button2.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button2.innerText);
        console.log(operacao)
    })

    button3.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button3.innerText);
        console.log(operacao)
    })

    button4.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button4.innerText);
        console.log(operacao)
    })

    button5.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button5.innerText);
        console.log(operacao)
    })

    button6.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button6.innerText);
        console.log(operacao)
    })

    button7.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button7.innerText);
        console.log(operacao)
    })

    button8.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button8.innerText);
        console.log(operacao)
    })

    button9.addEventListener('click', () =>{
        operacao[posicaoOperacao] = operacao[posicaoOperacao] + (button9.innerText);
        console.log(operacao)
    })

    buttonSum.addEventListener('click', () =>{
        operacao.push(buttonSum.innerText);
        posicaoOperacao = posicaoOperacao + 2;
        operacao[posicaoOperacao] = ''
        console.log(operacao)
    })

    buttonDiv.addEventListener('click', () =>{
        operacao.push(buttonDiv.innerText);
        posicaoOperacao = posicaoOperacao + 2;
        operacao[posicaoOperacao] = ''
        console.log(operacao)
    })

    buttonMult.addEventListener('click', () =>{
        operacao.push(buttonMult.innerText);
        posicaoOperacao = posicaoOperacao + 2;
        operacao[posicaoOperacao] = ''
        console.log(operacao)
    })

    buttonSub.addEventListener('click', () =>{
        operacao.push(buttonSub.innerText);
        posicaoOperacao = posicaoOperacao + 2;
        operacao[posicaoOperacao] = ''
        console.log(operacao)
    })

    buttonEqual.addEventListener('click', () =>{
        operacao = aplicaConversoes(operacao);  
        console.log(operacao)

        $.ajax ({
            url: "index.php",
            type: "post",
            data: {
                lista: operacao,
            },
            succes: (result) =>{
                            }
        })
    })

    function aplicaConversoes(lista){
        operacao = []
        for(i of lista){
            if(i != '+' && i != '-' && i != '+' && i != '/' && i != '*'){
                operacao.push(+i)
            }
            else{
                operacao.push(i)
            }
        }
        return operacao;
    }
});

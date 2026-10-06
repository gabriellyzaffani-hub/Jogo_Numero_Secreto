alert('Bem vindo ao jogo do numero secreto')
let numeroMaximo = 5000;
let numeroSecreto =  parseInt(Math.random() * numeroMaximo + 1);
console.log("o numero secreto é " + numeroSecreto);
let chute;
let tentativas = 1;

while(chute!= numeroSecreto){ 
    chute = prompt(`Digite um numero de 1 a ${numeroMaximo}`);

if (chute==numeroSecreto){
    break;
    alert(`Você acertou! o número secreto é" ${numeroSecreto} com total de ${tentativas} tentativas`);
} else { 
        if (chute > numeroSecreto){ 
        alert (`O numero secreto e menor que ${chute}`);
    } else { 
        alert (`O numero secreto e maior que ${chute}`);
    }
}
 tentativas++;
}
let PalavraTentativas= tentativas> 1 ? "tentativas": 'tentativa'
alert(`Você acertou! o número secreto é" ${numeroSecreto} com total de ${tentativas} tentativas`);



//if (tentativas > 1){ 
   // alert(`Você acertou! o número secreto é" ${numeroSecreto} com total de ${tentativas} tentativas`);
//} else {
   // alert(`Você acertou! o número secreto é" ${numeroSecreto} com total de ${tentativas} tentativa`);
//}

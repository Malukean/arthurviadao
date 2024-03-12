let numerosecreto = Math.floor(Math.random() *10);
console.log(numerosecreto);

let chute = prompt('escolha um numero e 0 a 10');


while (chute == null || chute =='') {
    alert("tente novamente");
    chute = prompt('escolha um numero e 0 a 10');
}

if (chute == numerosecreto) {
    alert("parabéns");
    console.log("parabéns, acertou!")
}
else {
    alert("errou");
    console.log("ERROU")
}

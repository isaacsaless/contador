let valor = 0;

const audios = [
    new Audio("audio/1.mp3"),
    new Audio("audio/2.mp3"),
    new Audio("audio/3.mp3"),
    new Audio("audio/4.mp3"),
    new Audio("audio/5.mp3"),
    new Audio("audio/6.mp3"),
    new Audio("audio/7.mp3"),
    new Audio("audio/8.mp3"),
    new Audio("audio/9.mp3"),
    new Audio("audio/10.mp3"),
];

function tocarAudio(){
    let aleatorio = Math.floor(Math.random() * audios.length);
    let audioSelecionado = audios[aleatorio];
    audioSelecionado.play()
}


document.getElementById("botao-subtracao").onclick = function(){
    valor = Number(document.getElementById("numero").textContent);
    document.getElementById("numero").textContent = `${valor - 1}`;
    tocarAudio();
}

document.getElementById("botao-reset").onclick = function(){
    valor = Number(document.getElementById("numero").textContent);
    document.getElementById("numero").textContent = 0
    tocarAudio();
}

document.getElementById("botao-soma").onclick = function(){
    valor = Number(document.getElementById("numero").textContent);
    document.getElementById("numero").textContent = `${valor+1}`
    tocarAudio();
}
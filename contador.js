const elemento = document.getElementById("contador-digital");

const namespace = "gabriel-diana-love";
const key = "visitas";

const hoje = new Date().toISOString().split("T")[0];
const ultimaVisita = localStorage.getItem("ultimaVisita");

if (ultimaVisita !== hoje) {
    // Nova visita no dia
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("ultimaVisita", hoje);
            animarNumero(data.value);
        });
} else {
    // Já visitou hoje → apenas pegar valor atual
    fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
        .then(res => res.json())
        .then(data => {
            animarNumero(data.value);
        });
}

function animarNumero(valorFinal){
    let atual = 0;
    const duracao = 1200;
    const incremento = valorFinal / (duracao / 20);

    const intervalo = setInterval(() => {
        atual += incremento;
        if(atual >= valorFinal){
            atual = valorFinal;
            clearInterval(intervalo);
        }
        elemento.textContent = formatarNumero(Math.floor(atual));
    },20);
}

function formatarNumero(num){
    return num.toString().padStart(6,"0");
}
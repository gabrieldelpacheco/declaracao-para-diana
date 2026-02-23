const elemento = document.getElementById("contador-digital");

// adiciona parâmetro anti-cache
const url = 'https://api.countapi.xyz/hit/gabriel-diana-love/visitas?nocache=' + Date.now();

fetch(url, { cache: "no-store" })
  .then(res => res.json())
  .then(data => {
      animarNumero(data.value);
  })
  .catch(() => {
      elemento.textContent = "000000";
  });

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

const componentes = {
    horas: document.querySelector(".horas"),
    minutos: document.querySelector(".minutos"),
    segundos: document.querySelector(".segundos"),
}


setInterval(() => {
    const agora = new Date();

    const atual = {
    horas: agora.getHours(),
    minutos: agora.getMinutes(),
    segundos: agora.getSeconds(),
}
    Object.keys(componentes).forEach(chave => {
        componentes[chave].textContent = atual[chave] < 10 ? "0"+ atual[chave]: atual[chave];
    });
}, 1000)
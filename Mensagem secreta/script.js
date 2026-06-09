const texto = document.querySelector("p");
let mostrar = true;
const button = document.querySelector(".mostrar");

button.addEventListener("click", () => {
    if (mostrar) {
        texto.textContent = "Parabéns, você descobriu o segredo!!"
        button.textContent = "escoder mensagem secreta"
    } else {
        texto.textContent = "?"
        button.textContent = "Mostrar mensagem secreta"
    }
    mostrar = !mostrar
})
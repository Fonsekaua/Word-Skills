const controlC = document.querySelector(".control-c");
const texto = document.querySelector(".texto");
const check = document.querySelector(".check"); 
const copy = document.querySelector(".copy");

controlC.addEventListener("click", () => {
    navigator.clipboard.writeText(texto.value);
    texto.value = ''
    controlC.replaceChildren(check);

    setTimeout(() => {
        controlC.replaceChildren(copy);
    }, 2000);
});

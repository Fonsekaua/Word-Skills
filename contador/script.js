const h1 = document.querySelector("h1")
const mais = document.querySelector(".mais")
const menos = document.querySelector(".menos")

h1.innerHTML = 0;

function atualizarCor() {
    if (Number(h1.innerHTML) < 0) {
        h1.classList.remove('positivo')
        h1.classList.add('negativo')
    } else if (Number(h1.innerHTML) > 0) {
        h1.classList.remove('negativo')
        h1.classList.add('positivo')
    } else {
        h1.classList.remove('negativo')
        h1.classList.remove('positivo')
    }
}

mais.addEventListener("click", () => {
    h1.innerHTML = Number(h1.innerHTML) + 1;
    atualizarCor();
})

menos.addEventListener("click", () => {
    h1.innerHTML = Number(h1.innerHTML) - 1;
    atualizarCor();
})
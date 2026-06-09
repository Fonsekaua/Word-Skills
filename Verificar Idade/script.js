const root = (color) => {
    document.documentElement.style.setProperty('--p-color', color);
}

let mensagens = [
    "Você é maior de idade!",
    "Você é menor de idade..",
    "Digite algum valor numerico!!",
    "Sua idade precisa ser maior que zero"
]

let verify = document.querySelector(".verif")
let texto = document.querySelector(".texto")
let message = document.querySelector(".msg")

verify.addEventListener("click", () => {
    let valor = texto.value.trim();

    if (valor === "") {
        message.textContent = mensagens[2]
        root('#41aaff')
        return;
    }

    let idade = Number(valor);

    if (isNaN(idade)) {
        message.textContent = mensagens[2]
        root('#41aaff')
        return;
    }

    if (idade < 0) {
        message.textContent = mensagens[3]
        root('#ffbd59')
    }
    else if (idade >= 18) {
        message.textContent = mensagens[0]
        root('#84ff84')
    }
    else {
        message.textContent = mensagens[1]
        root('#ff5959')
    }
})
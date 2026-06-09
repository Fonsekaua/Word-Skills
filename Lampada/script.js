const lampada = document.querySelector("img")
const lampadas = ['dark.png','light.png']
let status = false;
lampada.addEventListener("mouseenter",()=> {
    lampada.src = lampadas[1]
    lampada.style.opacity = 0.5})

lampada.addEventListener("mouseleave",()=> {
    lampada.src = lampadas[0]
})
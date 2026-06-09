const Canvas = document.getElementById("canvas")
const ctx = Canvas.getContext("2d")

//left -> top


function paint({ left, top, paintLeft, paintTop }) {
    ctx.fillRect(left, top, paintLeft, paintTop)
}
const cores = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "navy",
  "teal",
  "olive",
  "maroon",
  "gold",
  "silver"
];
const colors = document.querySelector(".colors");
cores.forEach(cor => {
    const element = document.createElement("div")
    element.classList.add('color')
    element.style.background = cor;
    colors.appendChild(element)
})

const mouse = document.querySelector(".mouse");

let x = 0;
let y = 0;
const color = document.querySelectorAll(".color")
ctx.fillStyle = "black"
color.forEach(element => {
    element.addEventListener("click",()=>{
        ctx.fillStyle = element.style.background
        
    })
})

document.addEventListener("keydown", ({ key }) => {
    console.log(key)
    if (key === "a") {
        x -= 50;
    } else if (key === "d") {
        x += 50;
    } else if (key === "w") {
        y -= 50;
    } else if (key === "s") {
        y += 50;
    } else if (key == " ") {
        color = !color
    } 

    else if (key == 'Enter') {
    
        paint({
            left: x,
            top: y,
            paintLeft: 50,
            paintTop: 50
        })
    x += 50    
    }
    mouse.style.left = `${x}px`;
    mouse.style.top = `${y}px`;
});

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

const button = document.querySelector("button")
button.addEventListener("click",()=>{
    const random = Math.floor(Math.random(0) * cores.length)
    document.querySelector("body").style.background = cores[random]
})
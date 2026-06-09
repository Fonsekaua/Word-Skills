const changeTheme = document.querySelector("button");
const iconTheme = changeTheme.querySelector("img")
const icons = ["light.png","dark.png"]
const body = document.querySelector("body")
changeTheme.addEventListener("click",() => {
    if(iconTheme.src.includes(icons[0])){
        iconTheme.src = icons[1]
       
    }else{
        iconTheme.src = icons[0]
        
    }
    body.classList.toggle("dark")
    changeTheme.classList.toggle("end")
})

const bar = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

if(bar){
    bar.addEventListener("click",  ()=>{
        menu.classList.toggle("active");
    });

}


const bar = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

if(bar){
    bar.addEventListener("click",  ()=>{
        menu.classList.toggle("active");
    });

}




// const forms= document.querySelector(".forms"),
// pwShowHide = document.querySelectorAll(".eye-icon"),
// links = document.querySelectorAll(".link");

//      pwShowHide.forEach(eyeIcon => {
//           eyeIcon.addEventListener("click", () => {
//              let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

//               pwFields.forEach(password => {
//                 if(password.type === "password")
//             {
//                    password.type = "text";
//                    eyeIcon.classList.replace("bx-hide", "bx-show");
//                    return; 
//             }
//                     password.type = "password";
//                  eyeIcon.classList.replace("bx-show", "bx-hide");
//          })

//      })

//   })


//   links.forEach(link => {
//     link.addEventListener("click", e => {
//         e.preventDefault();   //preventing from submit
//         forms.classList.toggle("show-login");
//     })
//   })


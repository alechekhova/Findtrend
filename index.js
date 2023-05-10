/*Adding navbar content to drop-down menu*/
let burgerMenu = document.querySelector(".burger-menu");
let navbar = document.querySelector("#navbar");
let navbarLinks = document.querySelector("#navbar-links");
let loginRegisterButtons = document.querySelector("#login-register-buttons");

burgerMenu.innerHTML = navbarLinks.innerHTML + loginRegisterButtons.innerHTML;

/*Burger menu*/
let burgerMenuIcon = document.querySelector("#burger-menu-icon-container");
let burgerLines = document.querySelectorAll(".burger-menu-line");
let burgerCross = document.querySelector(".burger-menu-cross");
let screenFader = document.querySelector(".screen-fader");

burgerMenuIcon.addEventListener("click", () => {
    toggleBurgerMenu();
})


/*Modal*/
let buttons = document.querySelectorAll(".burger-menu *, #navbar-links *, #footer-links *, #login-register-buttons *, button");
let modal = document.querySelector(".modal-background");
let modalCross = document.querySelector(".modal-cross");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.toggle("hide");
        if(burgerMenu.classList.contains("is-active")){
            toggleBurgerMenu();
        }
    })
});

modalCross.addEventListener("click", () => {
    modal.classList.add("hide");
});

modal.addEventListener("click", (e) =>{
    if(e.target !== modal){
        return;
    }
    modal.classList.toggle("hide");
});

document.addEventListener("keyup", (e) => {
    if(e.key === 'Escape' && !modal.classList.contains("hide")){
        modal.classList.toggle("hide");
    }
})

function toggleBurgerMenu(){
    burgerMenu.classList.toggle("is-active");
            screenFader.classList.toggle("hide");
            burgerLines.forEach(line => {
                line.classList.toggle("hide");
            });
            burgerCross.classList.toggle("hide");
}
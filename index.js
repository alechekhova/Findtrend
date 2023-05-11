/*Adding navbar content to drop-down menu*/
const burgerMenu = document.querySelector("#burger-menu");
const navbar = document.querySelector("#navbar");
const navbarLinks = document.querySelector("#navbar-links");
const loginRegisterButtons = document.querySelector("#login-register-buttons");

burgerMenu.innerHTML = navbarLinks.innerHTML + loginRegisterButtons.innerHTML;

/*Burger menu*/
const burgerMenuIcon = document.querySelector("#burger-menu-icon-container");
const burgerLines = document.querySelectorAll(".burger-menu-line");
const burgerCross = document.querySelector("#burger-menu-cross");
const screenFader = document.querySelector("#screen-fader");

burgerMenuIcon.addEventListener("click", () => {
    toggleBurgerMenu();
})


/*Modal*/
const buttons = document.querySelectorAll("#burger-menu *, #navbar-links *, #footer-links *, #login-register-buttons *, button");
const modal = document.querySelector("#modal-background");
const modalCross = document.querySelector("#modal-cross");

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

/*Functions*/

function toggleBurgerMenu(){
    burgerMenu.classList.toggle("is-active");
            screenFader.classList.toggle("hide");
            burgerLines.forEach(line => {
                line.classList.toggle("hide");
            });
            burgerCross.classList.toggle("hide");
}
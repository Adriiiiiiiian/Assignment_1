/*popup*/
let buttons = document.querySelectorAll(".buy-pop-up");
for(let i = 0; i< buttons.length; i++ ){
    buttons[i].addEventListener("click", function(){
        document.querySelector(".popup").classList.add("active");
    });
}

document.querySelector(".popup .close-popup").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup .confirm-button").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});
/*scroll button*/
const productcontainers = [...document.querySelectorAll(".accessories-container")];
const frontmerch =  [...document.querySelectorAll(".front-btn")];
const backmerch = [...document.querySelectorAll(".back-btn")];

productcontainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    backmerch[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    frontmerch[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})





/*var p = document.getElementsByClassName("front-btn-videos");

p.onclick = showAlert;

p.addEventListener("click", myScript);*/

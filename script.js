document.querySelector(".accessories-container .accessories-card .accessory-image .buy-pop-up")
    .addEventListener("click", function(){
    document.querySelector(".popup").classList.add(".active");
});

document.querySelector(".popup .close-popup").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove(".active");
}); 

let right = document.getElementsByClassName(".buy-pop-up")
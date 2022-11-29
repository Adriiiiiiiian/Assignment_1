const content = document.getElementsByClassName("accessories-container");
const frontbtn = document.getElementsByClassName("front-btn");
const backbtn = document.getElementsByClassName("back-btn");

backbtn.addEventListener("click", () => {
    content.scrollLeft -=20;
});

frontbtn.addEventListener("click", () => {
    content.scrollRight +=9;
});
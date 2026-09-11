const button = document.querySelector("#generateBtn");
const randomImage = document.querySelector("#randomImage");

button.addEventListener("click", function () {

    randomImage.src = "https://picsum.photos/200/300?" + new Date().getTime();

});
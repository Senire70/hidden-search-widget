let div = document.querySelector(".search-container");
let search = document.querySelector("#search");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    search.classList.toggle('active');
    search.focus();
});
document.addEventListener("DOMContentLoaded", () => {
    // Toggle Mobile Menu
    const navMenu = document.querySelector("nav ul");
    document.querySelector(".logo").addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

let page = 1;
function nextPage() {
    page++;
    document.getElementById("mangaPage").src = `page${page}.jpg`;
}

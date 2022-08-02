let burgerIcon = document.querySelector(".burgerIcon");
let menuLinks = document.querySelector(".myLinks");
let bars = document.querySelectorAll(".burgerIcon span");
burgerIcon.addEventListener("click", function () {
    bars.forEach(e => {
        if (e.classList.contains("flip")) {
            e.classList.remove("flip");
            menuLinks.style.display = "none"
        } else {
            e.classList.add("flip");
            menuLinks.style.display = "flex"
        }
    });
});

window.addEventListener('resize', () => {
    this.innerWidth >= 992 ? menuLinks.style.display = "flex" : menuLinks.style.display = "none";
});
window.addEventListener('scroll', () => {
    if (bars[0].classList.contains("flip")) {
        bars.forEach(e => {
            if (e.classList.contains("flip")) {
                e.classList.remove("flip");
                menuLinks.style.display = "none"
            } else {
                e.classList.add("flip");
                menuLinks.style.display = "flex"
            }
        });
        menuLinks.style.display = "none";
    }
});
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.addEventListener('scroll', function(e) {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
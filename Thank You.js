/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function HamNav() {
    var x = document.getElementById("options");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function t(x) {
    x.classList.toggle("change")
}
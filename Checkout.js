// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon 
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
//function which makes it possible to only click 1 checkbox at terms and conditions
function onebox (checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
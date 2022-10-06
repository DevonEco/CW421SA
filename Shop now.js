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
// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
//popup funtion and live calculation function for BILLY J SPORT SUEDE LEATHER
function myFunction2() {
    document.getElementById("label").innerHTML =
        "BILLY J SPORT SUEDE LEATHER";
    document.getElementById("Quantity").style.display = "inline"
    document.getElementById("MainDiv").style.display = "inline";
    popup.classList.toggle("show");
}
function liveCal() {
    var price = document.getElementById("Quantity").value * 3800
    document.getElementById("SubTotal").innerHTML =
        "SubTotal: " + "R" + price;
    document.getElementById('Total').innerHTML =
        "R" + price
}
//popup funtion and live calculation function for BILLY J SNUFF 2 TONE LEATHER
function myFunction3() {
    document.getElementById("label2").innerHTML =
        "BILLY J SNUFF 2 TINE LEATHER";
    document.getElementById("Quantity2").style.display = "inline"
    document.getElementById("MainDiv2").style.display = "inline";
    popup.classList.toggle("show");
}
function liveCal2() {
    var price = document.getElementById("Quantity2").value * 4200
    document.getElementById("SubTotal2").innerHTML =
        "SubTotal: " + "R" + price;
    document.getElementById('Total2').innerHTML =
        "R" + price
}
//popup funtion and live calculation function for BJ CLASSIC LEATHER JACKET
function myFunction4() {
    document.getElementById("label3").innerHTML =
        "BJ CLASSIC LEATHER JACKET";
    document.getElementById("Quantity3").style.display = "inline"
    document.getElementById("MainDiv3").style.display = "inline";
    popup.classList.toggle("show");
}
function liveCal3() {
    var price = document.getElementById("Quantity3").value * 3000
    document.getElementById("SubTotal3").innerHTML =
        "SubTotal: " + "R" + price;
    document.getElementById('Total3').innerHTML =
        "R" + price
}
//popup funtion and live calculation function for BJ SPORT LEATHER JACKET
function myFunction5() {
    document.getElementById("label4").innerHTML =
        "BJ SPORT LEATHER JACKET";
    document.getElementById("Quantity4").style.display = "inline"
    document.getElementById("MainDiv4").style.display = "inline";
    popup.classList.toggle("show");
}
function liveCal4() {
    var price = document.getElementById("Quantity4").value * 3500
    document.getElementById("SubTotal4").innerHTML =
        "SubTotal: " + "R" + price;
    document.getElementById('Total4').innerHTML =
        "R" + price
}
//popup funtion and live calculation function for BLACK BJ LEATHER JACKET
function myFunction6() {
    document.getElementById("label5").innerHTML =
        "BLACK BJ LEATHER JACKET";
    document.getElementById("Quantity5").style.display = "inline"
    document.getElementById("MainDiv5").style.display = "inline"
    popup.classList.toggle("show")
}
function liveCal5() {
    var price = document.getElementById("Quantity5").value * 4000
    document.getElementById("SubTotal5").innerHTML =
        "SubTotal: " + "R" + price;
    document.getElementById('Total5').innerHTML =
        "R" + price
}
//popup funtion and live calculation function for CHOCH LEATHER BAG
function myfunction7() {
    document.getElementById("label6").innerHTML =
        "CHOC LEATHER BAG";
    document.getElementById("Quantity6").style.display = "inline"
    document.getElementById("MainDiv6").style.display = "inline"
    popup.classList.toggle("show")
}
function liveCal6() {
    var price = document.getElementById("Quantity6").value * 3850
    document.getElementById("SubTotal6").innerHTML =
        "Subtotal: " + "R" + price;
    document.getElementById("Total6").innerHTML =
        "R" + price
}
//popup funtion and live calculation function for BROWN LEATHER BAG
function myFunction8() {
    document.getElementById("label7").innerHTML =
        "BROWN LEATHER BAG";
    document.getElementById("Quantity7").style.display = "inline"
    document.getElementById("MainDiv7").style.display = "inline"
    popup.classList.toggle("show")
}
function liveCal7() {
    var price = document.getElementById("Quantity7").value * 2775
    document.getElementById("SubTotal7").innerHTML =
        "Subtotal: " + "R" + price;
    document.getElementById("Total7").innerHTML =
        "R" + price
}
//popup funtion and live calculation function for SA BIKER JACKET
function myFunction9() {
    document.getElementById("label8").innerHTML =
        "SA BIKER JACKET";
    document.getElementById("Quantity8").style.display = "inline"
    document.getElementById("MainDiv8").style.display = "inline"
    popup.classList.toggle("show")
}
function liveCal8() {
    var price = document.getElementById("Quantity8").value * 3950
    document.getElementById("SubTotal8").innerHTML =
        "Subtotal: " + "R" + price;
    document.getElementById("Total8").innerHTML =
        "R" + price
}
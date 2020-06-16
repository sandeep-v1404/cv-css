function rn(image) {
    var random = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName(image)[0].setAttribute("src", "images/dice" + random + ".png");
    return random;
}
var rn1 = rn("img1");
var rn2 = rn("img2");
if (rn1 > rn2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if (rn1 === rn2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}
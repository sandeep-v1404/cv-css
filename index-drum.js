//Detecting Button Press
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
//Detecting KeyBoard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(ckey) {
    var activeButton = document.querySelector("." + ckey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}
// function Boy(name, age, hasWork, languages) {
//     this.name = name;
//     this.age = age;
//     this.hasWork = hasWork;
//     this.languages = languages;
// }
// var boy1 = new Boy("Sandeep", 19, true, ["English", "Hindi"]);
// console.log(boy1);
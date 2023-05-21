// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //7

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // Add eventListener to .drum array [0 - 6]
    var buttonInnerHTML = this.innerHTML; // 'this' is the referenced object that was clicked and is set to buttonInnerHTML // The innerHTML of each of the elements [w / a / s / d / j / k / l]
    makeSound(buttonInnerHTML); // Passing the key to the makeSound function
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function (event) {
  makeSound(event.key); // I send the key propertry of the event
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

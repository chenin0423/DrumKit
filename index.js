
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++) {

  //addEventListener(input1, input2);
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //this.style.color = "white";
    //console.log(this.innerHTML);
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
    makeSound(buttonInnerHTML);

  });

}

function playAudio(input) {
  var audio = new Audio(input);
  audio.play();
}

document.addEventListener("keypress", function(event) {
  buttonAnimation(event.key);
  makeSound(event.key);
});

function makeSound(key) {

  switch(key)
  {
    case "w":
      playAudio('.\\sounds\\tom-1.mp3');
      break;
    case "a":
      playAudio('.\\sounds\\tom-2.mp3');
      break;
    case "s":
      playAudio('.\\sounds\\tom-3.mp3');
      break;
    case "d":
      playAudio('.\\sounds\\tom-4.mp3');
      break;
    case "j":
      playAudio('.\\sounds\\crash.mp3');
      break;
    case "k":
      playAudio('.\\sounds\\kick-bass.mp3');
      break;
    case "l":
      playAudio('.\\sounds\\snare.mp3');
      break;
    default: console.log(key);
  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  //console.log("buttonAnimation: " + "." + currentKey);

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
//var audio = new Audio('.\\sounds\\tom-1.mp3');
//audio.play();

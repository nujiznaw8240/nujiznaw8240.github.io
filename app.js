// var buttonEl = document.getElementById("button");
// var userInputEl = document.getElementById("user-input");
// var onButtonClick = function(){
//     console.log("updated! ");
//     var inputText = document.getElementById("food").value;
//     userInputEl.textContent = inputText;
// };
// buttonEl.addEventListener("click", onButtonClick);

// turn sound on and off
var soundButtonPressed = 0;
var soundButton = document.getElementById("sound-button");

var audioCakeEl = document.getElementById("candle-sound");
var audioFireworkEl = document.getElementById("firework-sound");

var onSoundButtonClick = function() {
    soundButtonPressed += 1;
    if (soundButtonPressed%2) {
        soundButton.textContent = "sound: on";
        audioCakeEl.muted = false;
        audioFireworkEl.muted = false;
    }else{
        soundButton.textContent = "sound: off";
        audioCakeEl.muted = true;
        audioFireworkEl.muted = true;
    }
}
soundButton.addEventListener("click", onSoundButtonClick); 

var playCakeAudio = function() {
    $('#candle-sound').stop(true, true); // Stop any ongoing animation immediately
    
    audioCakeEl.volume = 0;
    audioCakeEl.play();
    $('#candle-sound').animate({volume: 1}, 1000);
}
var pauseCakeAudio = function() {
    $('#candle-sound').stop(true, true);

    audioCakeEl.volume = 1;
    $('#candle-sound').animate({volume: 0}, 400, function() {
        audioCakeEl.pause();
    });
}
var playFireworkAudio = function() {
    $('#firework-sound').stop(true, true); // Stop any ongoing animation immediately
    
    audioFireworkEl.volume = 0;
    audioFireworkEl.play();
    $('#firework-sound').animate({volume: 1}, 1000);
}
var pauseFireworkAudio = function() {
    $('#firework-sound').stop(true, true);

    audioFireworkEl.volume = 1;
    $('#firework-sound').animate({volume: 0}, 400, function() {
        audioFireworkEl.pause();
    });
}

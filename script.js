// const player = new Tone.Player("sounds/clap-808.wav").toDestination()
// player.autostart = true;

let sounds = {
    1: "sounds/tom-short.wav",
    2: "sounds/snare-punch.wav",
    3: "sounds/snare-lofi02.wav",
    4: "sounds/snare-electro.wav",
    5: "sounds/snare-brute.wav",
    6: "sounds/shaker-shuffle.wav"
}

// Create an object to store all currently playing/looping sounds
let currentlyPlaying = {}

// We have to get all of our checkboxes inside of our JS file
const boxes = document.querySelectorAll(".beatBox");

// array[i] = box
// Iterate through boxes array in order to add event listeners to all of them:
boxes.forEach(box => {

    let soundProperty = box.getAttribute("data-sound"); // A number (1-6)
    let validSound = sounds[`${soundProperty}`] // Something liek "sounds/clap-808.wav" or maybe "sounds/tom-acoustic01.wav"

    box.addEventListener("change", () => {

        // There are 2 changes: 
            // Which change is it?

        // See if box is checked
        if(box.checked){
            // Start looping that box's respective audio
            var player = new Tone.Player(validSound).toDestination();
            player.playbackrate = 0;
            player.loop = true;
            player.autostart = true;
            currentlyPlaying[soundProperty] = player;
        }
        else{

            // Stop looping the box's respective audio
            var player = currentlyPlaying[soundProperty]
            player.stop();
            delete player;
        }

    })

})
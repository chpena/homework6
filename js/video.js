var video;
var volume;
function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 

	video.play()
	console.log("Play Video");
	volume = document.getElementById("volume")
	console.log(video)
	volume.innerHTML = video.volume*100 + "%"
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= .1
	speed = video.playbackRate * 100
	console.log("Speed is "+ speed + "%");
} 

function increaseSpeed() {
	video.playbackRate += .1
	speed = video.playbackRate * 100
	console.log("Speed is "+ speed + "%");
} 

// function skipAhead() {

// 	console.log("Current location is "+ );
// } 

function mute() { 

	if (video.muted == true){
		video.muted = false;
		console.log("Unmuted")
		let muteButton = document.getElementById("mute")
		muteButton.innerHTML = ("Mute")
	}
	else{ 
		video.muted == false
		video.muted = true
		console.log("Muted")
		let muteButton = document.getElementById("mute")
		muteButton.innerHTML = ("Unmute")
	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	console.log(slider.value)
	video.volume = slider.value/100
	console.log("Volume is " + slider.value +"%");
	volume.innerHTML = video.volume*100 + "%"
}
       

function gray() { 
	video.style.filter = "grayscale(100%)"
	console.log("In grayscale")
}

function color() {
	video.style.filter = "grayscale(0%)"
	console.log("In color") 
}

function skipAhead(){
	let time = video.currentTime;
	video.currentTime += 60
	if (time <= video.duration) {
    video.loop = true;
  }
  console.log("Video time: " + time/60)
}

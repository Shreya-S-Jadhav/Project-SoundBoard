// 1. Create Audio objects using the Audio API 
const sounds = {
  dog: new Audio("sounds/dog.mp3"),
  clap: new Audio("sounds/clap.mp3"),
  pop: new Audio("sounds/pop.mp3"),
  cat: new Audio("sounds/cat.mp3"),
  bell: new Audio("sounds/bell.mp3"),
  whistle: new Audio("sounds/whistle.mp3")
};

// Optional: preload all sounds
Object.values(sounds).forEach(audio => {
  audio.preload = "auto";
});

// 2. State: volume + mute 
let currentVolume = 0.7;
let isMuted = false;

const volumeSlider = document.getElementById("volume");
const muteBtn = document.getElementById("mute-btn");
const buttons = document.querySelectorAll(".sound-btn");

// Helper: stop all sounds (prevents overlapping)
function stopAllSounds() {
  Object.values(sounds).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  // Remove playing class from all buttons so UI updates immediately
  document.querySelectorAll(".sound-btn").forEach(b => b.classList.remove("playing"));
}

// 3. Helper: set volume on all audio elements 
function updateAllVolumes() {
  Object.values(sounds).forEach(audio => {
    audio.volume = isMuted ? 0 : currentVolume;
  });
}

// 4. Play sound when a button is clicked 
function playSound(name) {
  const audio = sounds[name];
  if (!audio) return; // safety check

  // Stop any other playing sounds to prevent overlap
  stopAllSounds();

  // Find the button associated with this sound (for adding/removing class)
  const btn = document.querySelector(`.sound-btn[data-sound="${name}"]`);

  // Ensure volume is up to date
  audio.volume = isMuted ? 0 : currentVolume;

  // Attach handlers to toggle the button class while audio plays
  if (btn) {
    audio.onplaying = () => btn.classList.add("playing");
    audio.onended = () => btn.classList.remove("playing");
    // Also handle pause (in case it's paused programmatically)
    audio.onpause = () => btn.classList.remove("playing");
  }

  // Restart from the beginning so it replays even if still playing
  audio.currentTime = 0;

  audio.play().catch(err => {
    // In case browser blocks autoplay without user interaction
    console.error("Play failed:", err);
  });
}

// Add click event listeners to each sound button
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const soundName = btn.dataset.sound; // reads data-sound="..."
    playSound(soundName);
  });
});

// 5. Volume slider logic 
volumeSlider.addEventListener("input", (event) => {
  currentVolume = Number(event.target.value);
  updateAllVolumes();
});

// 6. Mute button logic 
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;

  if (isMuted) {
    muteBtn.classList.add("muted");
    muteBtn.textContent = "Unmute 🔊";
  } else {
    muteBtn.classList.remove("muted");
    muteBtn.textContent = "Mute 🔇";
  }

  updateAllVolumes();
});

// Set initial volume
updateAllVolumes();
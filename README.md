# Simple Soundboard

A small, single-page web soundboard that plays short audio clips (dog, cat, pop, clap, bell, whistle).

Click a button to play a sound, adjust the volume with the slider, and mute/unmute with the button.

## Quick Overview

- Single active sound: playing a new clip stops the previous one to prevent overlap.
- Volume slider controls the global volume.
- The currently playing button receives a `.playing` class for visual highlighting.

## Folder layout (project root)

```
Project/                              <-- repository root
├─ index.html                         <-- main page
├─ style.css                          <-- styles (includes .sound-btn.playing)
├─ script.js                          <-- audio + UI logic
├─ README.md                          <-- this file
└─ sounds/                            <-- audio files
	├─ dog.mp3
	├─ cat.mp3
	├─ pop.mp3
	├─ clap.mp3
	├─ bell.mp3
	└─ whistle.mp3
```

## How to open

Open `index.html` in a modern browser (double-click the file or open it from the browser). Then click any sound button to play a clip.

Note: you must interact (click) to start sounds — browsers often block autoplay without user interaction.

## Usage

- Click a sound button to play it.
- Adjust the `Volume` slider to change volume for all sounds.
- Use the `Mute` button to toggle audio on/off.
- While a clip plays, its button gets the `.playing` class (visual highlight).

## Troubleshooting

- No audio: ensure the sound files exist in the `sounds/` folder and are named correctly.
- Missing files: open DevTools → Network to check for 404s.
- JavaScript errors: open DevTools → Console and verify `script.js` is loaded (it should be included at the end of `index.html`).

## Customization

- Add more audio: put files into `sounds/`, add a matching button to `index.html` with `data-sound="name"`, and add an entry to the `sounds` map in `script.js`.
- Styling: edit `style.css` to change the look and the `.sound-btn.playing` appearance
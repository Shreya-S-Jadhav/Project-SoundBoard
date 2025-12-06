# Simple Soundboard

A lightweight web soundboard that plays short audio clips (dog, cat, pop, clap, bell, whistle).

Click a button to play a sound, adjust the global volume with the slider, and toggle mute with the button.

---

## Features

- Play Sounds: click a button to play a short clip.
- Single Active Sound: starting a new sound stops the previous one to prevent overlapping.
- Volume Control: adjustable global volume via the slider.
- Mute Button: toggle mute/unmute.
- Playing State: the button for the currently playing sound receives a `.playing` class for a visual highlight.

## Files

- `index.html` — Main HTML page and UI.
- `style.css` — Styles and the `.sound-btn.playing` state.
- `script.js` — JavaScript logic: audio objects, control handlers, and UI interaction.
- `sounds/` — Folder containing audio files used by the app (e.g., `dog.mp3`, `cat.mp3`, ...).

## Getting Started

### Prerequisites

A modern web browser. Optional: Python or Node.js to serve files locally.

### Open Locally (quick)

Double-click `index.html` to open it in your browser. Note: some browsers restrict audio when files are opened via the `file://` protocol — using a local server is recommended.

### Run Locally (recommended)

From the project directory (PowerShell):

```powershell
# Option 1: Python (if installed)
python -m http.server 8000

# Option 2: Node (if installed)
npx http-server -c-1

# Then open:
# http://localhost:8000
```

## Usage

- Click any sound button to play that clip.
- Adjust volume with the slider — it affects all sounds.
- Click `Mute` to toggle sound off and on.
- While a clip plays, its button will highlight (has the `.playing` class).

## Troubleshooting

- No sound / "Play failed": make sure you click a button — browsers often block autoplay without user interaction.
- Files not found: open DevTools → Network to check for 404s (verify `sounds/*.mp3` exist and paths match).
- JS errors: check DevTools → Console for errors such as `null` references (ensure `script.js` is included after the DOM or uses `defer` / `DOMContentLoaded`).
- Still broken: serve via a local server (see Run Locally).

## Customizing

- Add sounds: put audio files in `sounds/`, add a button in `index.html` with `data-sound="yourName"`, and add an entry to the `sounds` map in `script.js`.
- Style: edit `style.css` to adjust colors, animations, or the `.sound-btn.playing` rule.
- Persist volume: add `localStorage` logic to remember `currentVolume` between reloads.

## Contributing

Fork, make changes, and open a PR. Keep changes focused (add new sounds, improve accessibility, add keyboard shortcuts).

## License

Add a license of your choice (e.g., MIT) if you plan to share publicly.

---

If you want, I can also:
- Commit the new `README.md` for you, or
- Add a short `LICENSE` file (e.g., MIT), or
- Add keyboard shortcuts and accessibility improvements.

Which should I do next?
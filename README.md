# PokéPeek: Your Lo-Fi Browser Companions 

Working, coding, or studying online for hours can get a bit isolating. **PokéPeek** is a lightweight, zero-distraction browser extension built to bring a touch of nostalgia and warmth to your daily screen time. 

Every few minutes, classic Pokémon will gently glide into the bottom corners of your browser on custom-built sci-fi hoverboards. They’ll hang out, exchange a few words of encouragement (in their native Pokémon language, of course!), and then peacefully glide away, leaving you to focus on your work.

## Why Use PokéPeek?

Unlike other desktop pets that constantly run across your screen, cover your text, or drain your CPU, PokéPeek is designed with **minimalism and focus** in mind.
* **Unobtrusive Companionship:** They stay neatly tucked at the bottom edges of your screen and only visit periodically.
* **Zero Performance Hit:** No heavy game engines or bloated libraries. Just clean, native browser technologies.
* **Aesthetic Polish:** Features custom 3D CSS styling, glassy reflections, and comic-book-style typography.

## Key Features

* **The Director System:** An asynchronous JavaScript wave manager ensures Pokémon never clumsily overlap. It perfectly times their entrance, their conversational pauses, and their synchronized exits.
* **Dynamic Conversations:** Pokémon don't just stare; they chat! A randomized dialogue engine ensures they use different variations of their classic anime catchphrases every time they visit.
* **Hardware-Accelerated Physics:** The entry/exit sliding and the anti-gravity "bobbing" effects are built entirely using CSS3 cubic-bezier transitions and keyframe animations, ensuring buttery-smooth 60fps performance.
* **CSS 3D Hoverboards:** The sleek, Pokéball-themed hoverboards aren't images—they are constructed purely from CSS gradients, inset shadows, and dynamic variable-driven neon underglows that match the elemental type of the rider.

## Technology Stack

This project was built from scratch as an exercise in pushing Vanilla Web Technologies to their creative limits.

* **Logic & State Management:** Vanilla JavaScript (ES6+)
* **Styling & Animation:** Advanced CSS3 (Variables, Flexbox, Keyframes, Complex Box-Shadows)
* **Architecture:** Chrome Extension Manifest V3 (Content Scripts)
* **Assets:** High-fidelity Generation 5 pixel sprites (Open Source via Pokémon Showdown)

## 📥 Installation Guide

Installing PokéPeek is quick and easy. No coding experience required!

1. **Download the Code:** Click the green `<> Code` button at the top of this repository and select **Download ZIP**. 
2. **Extract the Folder:** Unzip the downloaded file to a permanent location on your computer (like your Documents folder).
3. **Open Extension Settings:** Open Google Chrome (or Brave/Edge) and type `chrome://extensions/` into your address bar and press Enter.
4. **Enable Developer Mode:** Look in the top-right corner of the extensions page and toggle **Developer mode** to **ON**.
5. **Load the Extension:** Click the **Load unpacked** button that appears in the top-left corner.
6. **Select the Folder:** Select the unzipped `PokemonPets` folder and click "Select Folder".

That's it! Open a new tab, navigate to any standard webpage (like Google or Wikipedia), and wait a few seconds for your new study buddies to arrive.

## Customization if you want to do

Want to add your favorite Pokémon or change what they say? It's incredibly easy to modify `content.js`.
1. Download a new transparent `.gif` sprite and place it in the `/images` folder.
2. Add the new Pokémon to the `pokeRoster` array with their hex color for the hoverboard glow.
3. Add a new array of phrases to the `dialogue` dictionary. 
4. Go back to your Extensions page and click the "Refresh" arrow on the PokéPeek card.

## Disclaimer & Copyright

This is a free, open-source fan project created purely for educational purposes and personal enjoyment. All Pokémon characters, names, and visual designs are the intellectual property of Nintendo, Creatures Inc., and GAME FREAK inc. This extension is not affiliated with, endorsed by, or sponsored by Nintendo. **This project is not monetized and should never be sold or distributed for profit.**

---
*Built with late-night coffee and love by [Apratim Das]* ❤️

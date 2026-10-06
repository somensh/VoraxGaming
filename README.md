# VoraxGaming

Live - https://somensh.github.io/VoraxGaming

## Description

**VoraxGaming** is a cinematic gaming-themed web experience built around the fictional **VORAX** combat system.

The website combines a dark futuristic interface with a scroll-driven character animation, cinematic typography, interactive CTA buttons, reveal animations, and dedicated sections for the VORAX combat system, armor technology, power core, and weapons system.

The hero animation uses **210 sequential character frames** that are preloaded and rendered on a `<canvas>`, with the displayed frame controlled by the user's scroll position.

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack / Key Dependencies](#tech-stack--key-dependencies)
- [File Structure Overview](#file-structure-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage / Getting Started](#usage--getting-started)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Author / Acknowledgements](#author--acknowledgements)
- [Contact](#contact)

## Screenshots

<!-- TODO: Add screenshots of the project here. -->

## Features

- Cinematic VORAX gaming landing page.
- Scroll-driven character frame animation using HTML Canvas.
- Preloads **210 animation frames** before starting the main animation.
- Real-time loading progress indicator.
- Smooth frame interpolation for a more cinematic scrolling experience.
- Responsive canvas sizing for different screen sizes.
- Futuristic dark UI with cyan accent styling.
- Hero section with animated CTA and scroll indicator.
- Combat System section.
- Armor Technology section.
- Nexus Power Core section.
- Weapons System section.
- Narrative / evolution section.
- Final combat-mode CTA section.
- Scroll reveal animations using `IntersectionObserver`.
- Hover depth effects on featured images.
- Responsive mobile layout.
- Google Fonts integration using **Outfit** and **Inter**.

## Tech Stack / Key Dependencies

- **HTML5:** Used for the website structure and content.
- **CSS3:** Used for the futuristic visual design, responsive layouts, transitions, hover effects, gradients, and animations.
- **JavaScript (Vanilla):** Handles canvas rendering, image preloading, scroll-based animation, smooth frame interpolation, loading progress, and scroll reveal effects.
- **HTML Canvas API:** Used to render the 210-frame character animation.
- **Intersection Observer API:** Used for scroll-triggered reveal animations.
- **Google Fonts:** Uses `Outfit` for headings and `Inter` for body text.

## File Structure Overview

```text
.
├── assets/
│   ├── vorax_combat_pose_1776447706610.png
│   ├── vorax_armor_closeup_1776447721203.png
│   ├── vorax_power_core_1776447735799.png
│   └── vorax_weapon_1776447751317.png
│
├── CharacterHeroImages/
│   ├── ezgif-frame-001.jpg
│   ├── ezgif-frame-002.jpg
│   ├── ...
│   └── ezgif-frame-210.jpg
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Prerequisites

No framework or package manager is required.

You only need:

- A modern web browser such as Chrome, Edge, Firefox, or Safari.
- The complete project files, including the `assets/` and `CharacterHeroImages/` directories.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/somensh/VoraxGaming.git
```

2. Navigate to the project directory:

```bash
cd VoraxGaming
```

3. Open the project in your code editor.

## Usage / Getting Started

Since this is a static HTML, CSS, and JavaScript project, there is no required build process.

You can open:

```text
index.html
```

directly in a modern browser.

For a better development experience, you can also run the project through a local development server such as the **Live Server** extension in VS Code.

### Animation

The hero animation loads 210 sequential JPG frames from:

```text
CharacterHeroImages/ezgif-frame-001.jpg
...
CharacterHeroImages/ezgif-frame-210.jpg
```

The JavaScript maps the user's scroll progress to the corresponding animation frame and smoothly interpolates between frames for a cinematic effect.

## Configuration

The main animation settings can be modified in `script.js`.

For example:

```javascript
const frameCount = 210;
```

The animation frame path is defined by:

```javascript
const imagePath = (index) =>
    `CharacterHeroImages/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;
```

The smoothness of the scroll animation can be adjusted through the interpolation value:

```javascript
currentFrameIndex +=
    (targetFrameIndex - currentFrameIndex) * 0.08;
```

The main visual theme and responsive behavior can be customized in `style.css`.

## API Reference

This project does not expose or consume an external API.

It is a client-side static website using HTML, CSS, JavaScript, the Canvas API, and browser APIs such as `IntersectionObserver`.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "Add some feature"
```

5. Push the branch:

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request.

## License

No `LICENSE` file is currently specified in the project.

Unless a license is added to the repository, the project should not be assumed to be freely reusable or redistributable.

## Author / Acknowledgements

**VoraxGaming** - Designed and developed by **SomEn - K1NG**.

The project focuses on creating a cinematic gaming interface and experimenting with:

- Canvas-based frame animation
- Scroll-driven interactions
- CSS animations and transitions
- Responsive UI design
- Futuristic visual design

## Contact

**Author:** SomEn - K1NG

**GitHub:** https://github.com/somensh

**Project Repository:** https://github.com/somensh/VoraxGaming

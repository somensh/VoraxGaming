# Vorax Gaming


This repository contains the source code for a cinematic, scroll-driven landing page for a fictional game titled "VORAX". The page creates an immersive experience by animating a character sequence as the user scrolls, combined with modern web design techniques and smooth reveal animations.

## Features

-   **Scroll-Driven Animation:** The hero section features a character that animates through a sequence of 210 frames, directly controlled by the user's scroll position.
-   **Smooth Rendering Loop:** Utilizes `requestAnimationFrame` and linear interpolation to ensure a buttery-smooth animation, independent of scroll event frequency.
-   **Image Preloader:** A custom loading screen tracks the preloading progress of the animation frames, providing a better user experience on initial load.
-   **Cinematic Design:** Employs a dark, futuristic aesthetic with gradient overlays, responsive typography, and subtle lighting effects to create an engaging atmosphere.
-   **Intersection Observer Animations:** Content sections elegantly fade and slide into view as they enter the viewport, powered by the `IntersectionObserver` API for optimal performance.
-   **Responsive Layout:** The design is fully responsive and adapts seamlessly to various screen sizes, from mobile devices to large desktop monitors.
-   **Pure JavaScript:** Built with vanilla HTML, CSS, and JavaScript, ensuring a lightweight and framework-free implementation.

## Technology Stack

-   **HTML5:** Structures the web page content.
-   **CSS3:** Handles all styling, including variables for easy theming, flexbox/grid for layout, and keyframe animations.
-   **JavaScript (ES6+):** Powers the core logic for the scroll-based animation, image preloading, and dynamic content reveals.

## Project Structure

```
├── CharacterHeroImages/    # Contains the 210 image frames for the scroll animation
├── assets/                 # Static images for the content sections
├── index.html              # The main HTML file
├── script.js               # Core JavaScript for animation and interactivity
└── style.css               # All CSS styles for the project
```

## Setup and Usage

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/somensh/VoraxGaming.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd VoraxGaming
    ```

3.  **Open the `index.html` file:**
    You can open `index.html` directly in your web browser. For the best experience and to avoid potential browser restrictions with local files, it is recommended to use a live server. If you use Visual Studio Code, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

## Customization

You can easily customize various aspects of the landing page:

-   **Animation Frames:** Replace the images in the `CharacterHeroImages/` directory with your own sequence. Remember to update the `frameCount` variable in `script.js` to match the number of images. The images should follow the naming convention `ezgif-frame-XXX.jpg`, where `XXX` is a zero-padded number.
-   **Colors and Fonts:** Modify the CSS variables at the top of `style.css` in the `:root` block to change the primary color scheme and typography.
-   **Content:** Edit the text and image sources directly within `index.html` to update the content of the various sections.

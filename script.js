document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-canvas');
    const context = canvas.getContext('2d');
    const html = document.documentElement;

    // Loader elements
    const loader = document.getElementById('loader');
    const progressText = document.getElementById('progress');
    const loaderBar = document.getElementById('loader-bar');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const frameCount = 210;
    const images = [];
    const imagePath = (index) => `CharacterHeroImages/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

    let loadedCount = 0;
    
    // Config: determine if images are centered, or fit like 'cover'
    // To match cinematic framing, we'll use a cover-like drawing technique.

    // Calculate canvas bounds dynamically
    const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Optionally resize image bounds if we need to immediately redraw
        if (images[0] && loadedCount > 0) {
            renderFrame(currentFrameIndex);
        }
    };
    
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    // Preload Images
    const preloadImages = () => {
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = imagePath(i);
            
            img.onload = () => {
                loadedCount++;
                const percentage = Math.floor((loadedCount / frameCount) * 100);
                progressText.innerText = `${percentage}%`;
                loaderBar.style.width = `${percentage}%`;

                if (loadedCount === frameCount) {
                    initAnimation();
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${img.src}`);
                loadedCount++; // Fail gracefully
                if (loadedCount === frameCount) {
                    initAnimation();
                }
            };
            images.push(img);
        }
    };

    let currentFrameIndex = 0; // Starts at 0, maps to frame 1

    // Rendering Logic
    const renderFrame = (index) => {
        if (!images[index] || !images[index].complete || images[index].naturalWidth === 0) return;

        const img = images[index];

        // "Object-fit: cover" technique for canvas, scaled down and shifted lower
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio) * 0.9; // Scale down by 10% to prevent head clipping
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = ((canvas.height - img.height * ratio) / 2) + (canvas.height * 0.08); // Shift down by 8% of viewport height

        context.clearRect(0, 0, canvas.width, canvas.height);

        // Turn off image smoothing for a sharper look occasionally, but default is fine
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';

        context.drawImage(
            img, 
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    };

    // Smooth Scroll Integration
    let scrollFraction = 0;
    let targetFrameIndex = 0;

    const updateScrollAnimation = () => {
        const heroContainer = document.querySelector('.hero-scroll-container');
        const scrollOffset = heroContainer.offsetTop;
        const maxScroll = heroContainer.offsetHeight - window.innerHeight;
        const currentScroll = html.scrollTop - scrollOffset;

        scrollFraction = currentScroll / maxScroll;

        // Ensure fraction is bounded [0, 1]
        scrollFraction = Math.max(0, Math.min(1, scrollFraction));

        // Fade out scroll indicator roughly when scrolling begins
        if (scrollFraction > 0.05) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.8';
        }

        targetFrameIndex = Math.floor(scrollFraction * (frameCount - 1));
    };

    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateScrollAnimation);
    });

    // We use a tick loop to tween `currentFrameIndex` to `targetFrameIndex` for ultimate smoothness.
    // This allows buttery smooth scroll frames even if the scroll event is chunky.
    const tick = () => {
        // Linear interpolation toward target frame
        // Lowered easing factor to 0.08 to make the animation silkier and more cinematic.
        currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.08;
        
        // Render step
        const renderIndex = Math.round(currentFrameIndex);
        renderFrame(renderIndex);

        requestAnimationFrame(tick);
    };

    const initAnimation = () => {
        // Fade out loader
        setTimeout(() => {
            loader.classList.add('hidden');
            // Initial render
            renderFrame(0);
            // Start render loop
            requestAnimationFrame(tick);
        }, 500); // Tiny artificial delay to let user see "100%"
    };

    // Begin preload process
    preloadImages();

    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

});

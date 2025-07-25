// index.js
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const mainContainer = document.querySelector('.container');
    const backgroundElementsContainer = document.querySelector('.background-elements');
    const indexProgressBar = document.getElementById('indexProgressBar'); // Changed from page3ProgressBar
    const indexProgressText = document.getElementById('indexProgressText'); // Changed from page3ProgressText

    const musicPlayButton = document.getElementById('music-play-button');
    const backgroundAudio = new Audio('perfect_instrumental.mp3'); // Ensure this path is correct
    backgroundAudio.loop = true;
    backgroundAudio.volume = 0.5;

    let loadProgress = 0;

    // Simulate loading progress for the initial preloader
    const interval = setInterval(() => {
        loadProgress += 10;
        if (loadProgress <= 100) {
            indexProgressBar.style.width = `${loadProgress}%`;
            indexProgressText.textContent = `${loadProgress}%`;
        }
        if (loadProgress >= 100) {
            clearInterval(interval);
            // Once loading is complete, hide the preloader and show content
            setTimeout(() => {
                preloader.classList.add('hidden');
                mainContainer.classList.add('active'); // Activate main content fade-in
                // Optionally start music after page loads and preloader is hidden
                // backgroundAudio.play().catch(error => console.error("Music auto-play failed:", error));
            }, 500); // Give a little delay for the progress bar to hit 100%
        }
    }, 100); // Update every 100ms

    // --- Dynamic Background Elements Initialization ---
    if (backgroundElementsContainer) {
        createStars(backgroundElementsContainer);
        createEtherealGlows(backgroundElementsContainer);
        createParticles(backgroundElementsContainer);
        createAuraGlows(backgroundElementsContainer);
        createStreaks(backgroundElementsContainer);
        createFloatingOrbs(backgroundElementsContainer);
        createNebulaClouds(backgroundElementsContainer);
        createWindGusts(backgroundElementsContainer);
        createFlyingWings(backgroundElementsContainer);
        createShootingStars(backgroundElementsContainer);
        createCosmicDust(backgroundElementsContainer);
        createFlickeringMotes(backgroundElementsContainer);
        createSwirlingWisps(backgroundElementsContainer);
        createGentleFlares(backgroundElementsContainer);
        createMoonAndScenery(backgroundElementsContainer);
    }


    // --- Music Playback Logic ---
    if (musicPlayButton) {
        musicPlayButton.addEventListener('click', () => {
            if (backgroundAudio.paused) {
                backgroundAudio.play().catch(error => console.error("Music play failed:", error));
                musicPlayButton.classList.remove('paused');
                musicPlayButton.classList.add('playing');
            } else {
                backgroundAudio.pause();
                musicPlayButton.classList.remove('playing');
                musicPlayButton.classList.add('paused');
            }
        });

        backgroundAudio.addEventListener('play', () => {
            musicPlayButton.classList.remove('paused');
            musicPlayButton.classList.add('playing');
        });
        backgroundAudio.addEventListener('pause', () => {
            musicPlayButton.classList.remove('playing');
            musicPlayButton.classList.add('paused');
        });
        if (backgroundAudio.paused) {
            musicPlayButton.classList.add('paused');
        } else {
            musicPlayButton.classList.add('playing');
        }
    }


    // --- YES Button Logic (specific to index.html) ---
    const yesButton = document.getElementById('yesButton');
    if (yesButton) {
        yesButton.addEventListener('click', () => {
            window.showTransitionPreloader('acknowledgement.html?response=yes');
        });
    }

    // --- NO Button Logic (specific to index.html) ---
    const noButton = document.getElementById('noButton');
    if (noButton) {
        noButton.addEventListener('mouseover', () => {
            const buttonRect = noButton.getBoundingClientRect();
            const maxX = window.innerWidth - buttonRect.width;
            const maxY = window.innerHeight - buttonRect.height;

            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            noButton.style.position = 'absolute';
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;
            noButton.style.transition = 'all 0.1s ease-out';
        });
    }

    // --- Transition Preloader Logic (Global) ---
    window.showTransitionPreloader = function(targetPage) {
        let dynamicPreloader = document.getElementById('dynamic-transition-preloader');
        if (!dynamicPreloader) {
            dynamicPreloader = document.createElement('div');
            dynamicPreloader.id = 'dynamic-transition-preloader';
            dynamicPreloader.classList.add('transition-preloader');
            dynamicPreloader.innerHTML = `
                <div class="preloader-dual-hearts">
                    <div class="heart heart-left"></div>
                    <div class="heart heart-right"></div>
                </div>
                <div class="loading-text">Transitioning...</div>
            `;
            document.body.appendChild(dynamicPreloader);
        }

        dynamicPreloader.classList.add('active');
        const dualHearts = dynamicPreloader.querySelector('.preloader-dual-hearts');
        if (dualHearts) {
            dualHearts.classList.add('active'); // Activates CSS animations
            const heartLeft = dualHearts.querySelector('.heart-left');
            const heartRight = dualHearts.querySelector('.heart-right');
            heartLeft.style.animation = 'dualHeartSlideIn 0.5s forwards, heartPulse 1.5s infinite alternate ease-in-out 0.5s';
            heartRight.style.animation = 'dualHeartSlideIn 0.5s forwards 0.1s, heartPulse 1.5s infinite alternate ease-in-out 0.6s';
        }

        setTimeout(() => {
            window.location.href = targetPage;
        }, 1000); // Wait 1 second before redirecting
    };

    // --- Helper Functions for Dynamic Background Elements ---
    function createMoonAndScenery(container) {
        const moon = document.createElement('div');
        moon.classList.add('moon');
        container.appendChild(moon);

        const scenery = document.createElement('div');
        scenery.classList.add('distant-scenery');
        container.appendChild(scenery);
    }

    function createStars(container) {
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDelay = `${Math.random() * 4}s`;
            container.appendChild(star);
        }
    }

    function createEtherealGlows(container) {
        const numGlows = 5;
        for (let i = 0; i < numGlows; i++) {
            const glow = document.createElement('div');
            glow.classList.add('ethereal-glow');
            const size = Math.random() * 100 + 50;
            glow.style.width = `${size}px`;
            glow.style.height = `${size}px`;
            glow.style.left = `${Math.random() * 100}vw`;
            glow.style.top = `${Math.random() * 100}vh`;
            glow.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(glow);
        }
    }

    function createParticles(container) {
        const numParticles = 30;
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 2 + 0.5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.setProperty('--end-x', `${(Math.random() - 0.5) * 50}vw`);
            particle.style.setProperty('--end-y', `${(Math.random() - 0.5) * 50}vh`);
            container.appendChild(particle);
        }
    }

    function createAuraGlows(container) {
        const numAuras = 4;
        for (let i = 0; i < numAuras; i++) {
            const aura = document.createElement('div');
            aura.classList.add('aura-glow');
            const size = Math.random() * 200 + 100;
            aura.style.width = `${size}px`;
            aura.style.height = `${size}px`;
            aura.style.left = `${Math.random() * 100}vw`;
            aura.style.top = `${Math.random() * 100}vh`;
            aura.style.animationDelay = `${Math.random() * 20}s`;
            aura.style.setProperty('--start-x', `${(Math.random() - 0.5) * 10}vw`);
            aura.style.setProperty('--start-y', `${(Math.random() - 0.5) * 10}vh`);
            aura.style.setProperty('--end-x', `${(Math.random() - 0.5) * 20}vw`);
            aura.style.setProperty('--end-y', `${(Math.random() - 0.5) * 20}vh`);
            container.appendChild(aura);
        }
    }

    function createStreaks(container) {
        const numStreaks = 8;
        for (let i = 0; i < numStreaks; i++) {
            const streak = document.createElement('div');
            streak.classList.add('streak');
            const length = Math.random() * 150 + 50;
            streak.style.width = `${length}px`;
            streak.style.left = `${Math.random() * 100}vw`;
            streak.style.top = `${Math.random() * 100}vh`;
            streak.style.animationDelay = `${Math.random() * 8}s`;
            streak.style.setProperty('--start-x', `${Math.random() * 100}vw`);
            streak.style.setProperty('--end-x', `${Math.random() * 100}vw`);
            streak.style.setProperty('--angle', `${Math.random() * 360}deg`);
            container.appendChild(streak);
        }
    }

    function createFloatingOrbs(container) {
        const numOrbs = 7;
        for (let i = 0; i < numOrbs; i++) {
            const orb = document.createElement('div');
            orb.classList.add('floating-orb');
            const size = Math.random() * 80 + 40;
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;
            orb.style.left = `${Math.random() * 100}vw`;
            orb.style.top = `${Math.random() * 100}vh`;
            orb.style.animationDelay = `${Math.random() * 25}s`;
            orb.style.setProperty('--start-x', `${(Math.random() - 0.5) * 15}vw`);
            orb.style.setProperty('--start-y', `${(Math.random() - 0.5) * 15}vh`);
            orb.style.setProperty('--end-x', `${(Math.random() - 0.5) * 25}vw`);
            orb.style.setProperty('--end-y', `${(Math.random() - 0.5) * 25}vh`);
            container.appendChild(orb);
        }
    }

    function createNebulaClouds(container) {
        const numNebulas = 3;
        for (let i = 0; i < numNebulas; i++) {
            const nebula = document.createElement('div');
            nebula.classList.add('nebula-cloud');
            const size = Math.random() * 400 + 200;
            nebula.style.width = `${size}px`;
            nebula.style.height = `${size}px`;
            nebula.style.left = `${Math.random() * 100}vw`;
            nebula.style.top = `${Math.random() * 100}vh`;
            nebula.style.animationDelay = `${Math.random() * 30}s`;
            nebula.style.setProperty('--start-x', `${(Math.random() - 0.5) * 20}vw`);
            nebula.style.setProperty('--start-y', `${(Math.random() - 0.5) * 20}vh`);
            nebula.style.setProperty('--end-x', `${(Math.random() - 0.5) * 40}vw`);
            nebula.style.setProperty('--end-y', `${(Math.random() - 0.5) * 40}vh`);
            container.appendChild(nebula);
        }
    }

    function createWindGusts(container) {
        const numGusts = 10;
        for (let i = 0; i < numGusts; i++) {
            const gust = document.createElement('div');
            gust.classList.add('wind-gust');
            const length = Math.random() * 300 + 100;
            gust.style.width = `${length}px`;
            gust.style.left = `${Math.random() * 100}vw`;
            gust.style.top = `${Math.random() * 100}vh`;
            gust.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(gust);
        }
    }

    function createFlyingWings(container) {
        const numWings = 5;
        for (let i = 0; i < numWings; i++) {
            const wing = document.createElement('div');
            wing.classList.add('flying-wing');
            const size = Math.random() * 40 + 20;
            wing.style.width = `${size}px`;
            wing.style.height = `${size}px`;
            wing.style.left = `${Math.random() * 100}vw`;
            wing.style.top = `${Math.random() * 100}vh`;
            wing.style.animationDelay = `${Math.random() * 18}s`;
            wing.style.setProperty('--start-x', `${Math.random() * 100}vw`);
            wing.style.setProperty('--start-y', `${Math.random() * 100}vh`);
            wing.style.setProperty('--end-x', `${Math.random() * 100}vw`);
            wing.style.setProperty('--end-y', `${Math.random() * 100}vh`);
            wing.style.setProperty('--rotation', `${Math.random() * 360}deg`);
            wing.style.setProperty('--scale', `${Math.random() * 0.5 + 0.7}`);
            container.appendChild(wing);
        }
    }

    function createShootingStars(container) {
        const numShootingStars = 3;
        for (let i = 0; i < numShootingStars; i++) {
            const star = document.createElement('div');
            star.classList.add('shooting-star');
            const length = Math.random() * 200 + 100;
            star.style.width = `${length}px`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDelay = `${Math.random() * 10}s`;
            star.style.setProperty('--start-x', `${Math.random() * 100}vw`);
            star.style.setProperty('--end-x', `${Math.random() * 100}vw`);
            star.style.setProperty('--angle', `${Math.random() * 360}deg`);
            container.appendChild(star);
        }
    }

    function createCosmicDust(container) {
        const numDust = 50;
        for (let i = 0; i < numDust; i++) {
            const dust = document.createElement('div');
            dust.classList.add('cosmic-dust');
            const size = Math.random() * 1.5 + 0.5;
            dust.style.width = `${size}px`;
            dust.style.height = `${size}px`;
            dust.style.left = `${Math.random() * 100}vw`;
            dust.style.top = `${Math.random() * 100}vh`;
            dust.style.animationDelay = `${Math.random() * 25}s`;
            dust.style.setProperty('--start-x', `${(Math.random() - 0.5) * 10}vw`);
            dust.style.setProperty('--start-y', `${(Math.random() - 0.5) * 10}vh`);
            dust.style.setProperty('--end-x', `${(Math.random() - 0.5) * 20}vw`);
            dust.style.setProperty('--end-y', `${(Math.random() - 0.5) * 20}vh`);
            dust.style.setProperty('--size', `${size}px`);
            container.appendChild(dust);
        }
    }

    function createFlickeringMotes(container) {
        const numMotes = 40;
        for (let i = 0; i < numMotes; i++) {
            const mote = document.createElement('div');
            mote.classList.add('flickering-mote');
            const size = Math.random() * 2 + 0.5;
            mote.style.width = `${size}px`;
            mote.style.height = `${size}px`;
            mote.style.left = `${Math.random() * 100}vw`;
            mote.style.top = `${Math.random() * 100}vh`;
            mote.style.animationDelay = `${Math.random() * 3}s`;
            container.appendChild(mote);
        }
    }

    function createSwirlingWisps(container) {
        const numWisps = 4;
        for (let i = 0; i < numWisps; i++) {
            const wisp = document.createElement('div');
            wisp.classList.add('swirling-wisp');
            const size = Math.random() * 150 + 80;
            wisp.style.width = `${size}px`;
            wisp.style.height = `${size}px`;
            wisp.style.left = `${Math.random() * 100}vw`;
            wisp.style.top = `${Math.random() * 100}vh`;
            wisp.style.animationDelay = `${Math.random() * 15}s`;
            wisp.style.setProperty('--wisp-start-x', `${(Math.random() - 0.5) * 30}vw`);
            wisp.style.setProperty('--wisp-start-y', `${(Math.random() - 0.5) * 30}vh`);
            wisp.style.setProperty('--wisp-end-x', `${(Math.random() - 0.5) * 50}vw`);
            wisp.style.setProperty('--wisp-end-y', `${(Math.random() - 0.5) * 50}vh`);
            container.appendChild(wisp);
        }
    }

    function createGentleFlares(container) {
        const numFlares = 5;
        for (let i = 0; i < numFlares; i++) {
            const flare = document.createElement('div');
            flare.classList.add('gentle-flare');
            const size = Math.random() * 400 + 300;
            flare.style.width = `${size}px`;
            flare.style.height = `${size}px`;
            flare.style.left = `${Math.random() * 100}vw`;
            flare.style.top = `${Math.random() * 100}vh`;
            flare.style.animationDelay = `${Math.random() * 20}s`;
            flare.style.setProperty('--flare-duration', `${Math.random() * 10 + 5}s`);
            container.appendChild(flare);
        }
    }
});

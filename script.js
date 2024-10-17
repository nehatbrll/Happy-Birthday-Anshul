const createHeartSparkle = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Randomize position and delay
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 2}s`;

    document.querySelector('.confetti').appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 1500);
};

const createStarSparkle = () => {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Randomize position and delay
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 2}s`;

    document.querySelector('.confetti').appendChild(star);

    // Remove star after animation
    setTimeout(() => {
        star.remove();
    }, 1500);
};

// Generate heart and star sparkles every 100ms
setInterval(() => {
    createHeartSparkle();
    createStarSparkle();
}, 100);
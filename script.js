document.addEventListener("DOMContentLoaded", function() {
    const typingContent = "You are my sunflower. Thank you for everything.";
    const typingContainer = document.getElementById("typing-content");
    const otherImage = document.querySelector('.other-image');

    otherImage.style.opacity = '0'; // Set opacity to 0 initially

    function typeText(index) {
        typingContainer.innerHTML = typingContent.slice(0, index);
    }

    function showOtherImage() {
        otherImage.style.opacity = '1'; // Fade in the other image
    }

    function typeAnimation(index) {
        setTimeout(function() {
            typeText(index);
            if (index === typingContent.length) {
                // Call the function to show the other image when typing is complete
                showOtherImage();
            }
        }, index * 120); // Adjust the typing speed (delay) as needed

    }

    // Start typing animation
    for (let i = 0; i <= typingContent.length; i++) {
        typeAnimation(i);
    }
});

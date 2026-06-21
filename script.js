// 1. Grab the theme toggle button from the HTML
const themeToggle = document.getElementById('theme-toggle');

// 2. Listen for when a user clicks the button
themeToggle.addEventListener('click', () => {
    
    // Toggle a class called "light-theme" on the <body> tag
    document.body.classList.toggle('light-theme');
    
    // Check if the body currently has the light theme active
    if (document.body.classList.contains('light-theme')) {
        // If it's light mode, switch the button emoji to a Sun
        themeToggle.textContent = '☀️';
    } else {
        // If it's dark mode, switch it back to a Moon
        themeToggle.textContent = '🌙';
    }
});
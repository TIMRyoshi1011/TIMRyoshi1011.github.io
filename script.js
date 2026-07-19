const dark_mode = document.getElementById("dark-mode-theme");

// 1. Read cookie on page load to apply saved theme and icon
const savedTheme = document.cookie.split("; ").find(row => row.startsWith("theme="));
if (savedTheme) {
    const themeValue = savedTheme.split("=")[1];
    
    if (themeValue === "dark") {
        document.body.classList.add("dark");
        const icon = dark_mode.querySelector(".icon");
        if (icon) icon.textContent = "🌙";
    }
}

// 2. Your existing click listener updated to save the cookie
dark_mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    
    const icon = dark_mode.querySelector(".icon");
    if (icon) {
        icon.textContent = isDark ? "🌙" : "☀️";
    }

    // Save the choice in a cookie for 1 year (max-age is in seconds)
    const themeChoice = isDark ? "dark" : "light";
    document.cookie = `theme=${themeChoice}; max-age=31536000; path=/; SameSite=Lax`;
});

document.getElementById("nothing").addEventListener("click", function(event) {
    alert("No References Available!");
    event.preventDefault();
});
const dark_mode = document.getElementById("dark-mode");

dark_mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = dark_mode.querySelector(".icon");
    icon.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});
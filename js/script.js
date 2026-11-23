//console.log("JavaScript is connected!");

const themeToggle = document.querySelector(".theme-toggle");

//console.log(themeToggle);

const html = document.documentElement;

//console.log(html);

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Light Mode";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    themeToggle.setAttribute("aria-pressed", "true");
}

themeToggle.addEventListener("click", function () {
    if (html.getAttribute("data-theme") === "dark") {
        html.removeAttribute("data-theme");
        themeToggle.textContent = "Dark Mode";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
        themeToggle.setAttribute("aria-pressed", "false");
        localStorage.setItem("theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
        themeToggle.textContent = "Light Mode";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
        themeToggle.setAttribute("aria-pressed", "true");
        localStorage.setItem("theme", "dark");
    }
});
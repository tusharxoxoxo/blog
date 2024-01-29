// Toggle theme

const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");

if (getTheme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  isDark ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
}

changeFavicon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
    );
  document.body.classList.contains("dark-theme") ?
    metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
  ;
  changeFavicon();
});

function changeFavicon() {
  // for now just trigger main favicon
  var link = document.createElement("link"), oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = document.body.classList.contains("dark-theme") ? "https://jduchniewicz.com/favicon-dark.ico" : "https://jduchniewicz.com/favicon-light.ico";

  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}
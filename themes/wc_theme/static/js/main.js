var html = document.querySelector("html");

document.getElementById("mode").addEventListener("click", () => {
  var theme = html.dataset["theme"] === "light" ? "dark" : "light";
  html.dataset["theme"] = theme;
  localStorage.setItem("theme", theme);
});

if (localStorage.getItem("theme") === "dark") {
  html.dataset["theme"] = "dark";
} else {
  html.dataset["theme"] = "light";
}

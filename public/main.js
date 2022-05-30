var html = document.querySelector("html");

document.getElementById("mode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  var theme = document.body.classList.contains("dark") ? "dark" : "light";
  html.dataset["theme"] = theme;

  localStorage.setItem("theme", theme);
});

if (localStorage.getItem("theme") === "dark") {
  html.dataset["theme"] = "dark";
}

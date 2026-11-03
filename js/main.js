// Shared behaviour: dark mode, active nav link, year in footer
(function () {
  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, val) {
    try { localStorage.setItem(key, val); } catch (e) { /* storage blocked */ }
  }

  if (safeGet("cn-theme") === "dark") document.body.classList.add("dark");

  document.addEventListener("DOMContentLoaded", function () {
    // theme toggle
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.textContent = document.body.classList.contains("dark") ? "Light mode" : "Dark mode";
      toggle.addEventListener("click", function () {
        const dark = document.body.classList.toggle("dark");
        safeSet("cn-theme", dark ? "dark" : "light");
        toggle.textContent = dark ? "Light mode" : "Dark mode";
      });
    }

    // highlight current page in nav
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach(function (a) {
      if (a.getAttribute("href") === current) a.classList.add("active");
    });

    // footer year
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();

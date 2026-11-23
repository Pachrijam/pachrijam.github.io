document.getElementById("reloadButton").addEventListener("click", function() {
    location.reload();
});

const menuToggle = document.getElementById("menu-toggle");
const menuFiles = document.getElementById("menu-files");

menuToggle.addEventListener("click", function() {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuFiles.inert = isExpanded;
});

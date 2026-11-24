/*
    index.js provides functionality to the left container of the homepage.
    This includes the reload button and explorer psuedo file behavior.
*/ 

// reload button
document.getElementById("reloadButton").addEventListener("click", function() {
    location.reload();
});

// Explorer file toggling, folder toggling, and subfolder toggling
const menuToggle = document.getElementById("menu-toggle");
const subMenuToggle = document.getElementById("sub-menu-toggle");
const menuFiles = document.getElementById("menu-files");
const subMenuFiles = document.getElementById("sub-menu-files");

menuToggle.addEventListener("click", function() {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuFiles.inert = isExpanded;
});

subMenuToggle.addEventListener("click", function() {
    const isExpanded = subMenuToggle.getAttribute("aria-expanded") === "true";
    subMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
    subMenuFiles.inert = isExpanded;
});

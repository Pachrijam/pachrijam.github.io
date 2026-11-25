/*
    index.js provides functionality to the left container of the homepage
    as well as the main display of the homepage. This includes the reload 
    button, menu toggling in the explorer tab, and displaying code to the 
    main content area dynamically.
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

// main folder toggle
menuToggle.addEventListener("click", function() {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuFiles.inert = isExpanded;
});

// sub-folder toggle
subMenuToggle.addEventListener("click", function() {
    const isExpanded = subMenuToggle.getAttribute("aria-expanded") === "true";
    subMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
    subMenuFiles.inert = isExpanded;
});

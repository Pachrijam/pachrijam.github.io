/*
    index.js provides functionality to the left container of the homepage
    as well as the main display of the homepage. This includes the reload 
    button, menu toggling in the explorer tab, resizing divs through dragging, 
    and displaying code to the main content area dynamically.
*/ 

// open about.md automatically upon page load ----------------------------------------------------|
document
  .querySelector('.file-item[data-file="./src/explorer-code-files/about.md"]')
  .click();

// reload button -------------------------------------------------------------------------------|
document.getElementById("reloadButton").addEventListener("click", function() {
  location.reload();
});

// Explorer file toggling, folder toggling, and subfolder toggling -----------------------------|
const menuToggle = document.getElementById("menu-toggle");
const subMenuToggle = document.getElementById("sub-menu-toggle");
const menuFiles = document.getElementById("menu-files");
const subMenuFiles = document.getElementById("sub-menu-files");

// main folder toggle --------------------------------------------------------------------------|
menuToggle.addEventListener("click", function() {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuFiles.inert = isExpanded;
});

// sub-folder toggle ---------------------------------------------------------------------------|
subMenuToggle.addEventListener("click", function() {
  const isExpanded = subMenuToggle.getAttribute("aria-expanded") === "true";
  subMenuToggle.setAttribute("aria-expanded", String(!isExpanded));
  subMenuFiles.inert = isExpanded;
});

// click handler for code display --------------------------------------------------------------|
const fileContent = document.getElementById("fileContent");
document.querySelectorAll(".file-item").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      const response = await fetch(button.dataset.file);
      if (!response.ok) {
        throw new Error(`Failed to load ${button.dataset.file}`);
      }

      // code styling

      fileContent.textContent = await response.text();
      const extension = button.dataset.file.split(".").pop().toLowerCase();
      const languages = {
        cpp: "cpp",
        py: "python",
        js: "javascript",
        json: "json",
        xml: "xml",
        php: "php",
        md: "markdown"
      };

      fileContent.removeAttribute("data-highlighted");
      fileContent.className = `language-${languages[extension] || "plaintext"}`;

      if (languages[extension]) {
        hljs.highlightElement(fileContent);
      }
    } catch (error) {
      console.error(error);
      fileContent.textContent = "Could not load file. Check the path.";
    }
  });
});

// .explorer horizontal div resizing -------------------------------------------------------------|
const explorer = document.querySelector(".explorer");
const explorerHandle = document.querySelector(".explorer-resize-handle");
let explorerStartX;
let explorerStartWidth;

explorerHandle.addEventListener('pointerdown', (event) => {
  explorerStartX = event.clientX;

  const style = getComputedStyle(explorer);
  const extraWidth = 
    parseFloat(style.paddingLeft) +
    parseFloat(style.paddingRight) +
    parseFloat(style.borderLeftWidth) +
    parseFloat(style.borderRightWidth);

  explorerStartWidth = explorer.getBoundingClientRect().width - extraWidth;
  explorerHandle.setPointerCapture(event.pointerId);
});

explorerHandle.addEventListener("pointermove", (event) => {
  if(!explorerHandle.hasPointerCapture(event.pointerId)) return;
  const newWidth = explorerStartWidth + event.clientX - explorerStartX;
  explorer.style.width = `${Math.max(80, newWidth)}px`;
});

// .featured horizontal div resizing -------------------------------------------------------------|
const featured = document.querySelector(".featured");
const featuredHandle = document.querySelector(".featured-resize-handle");
let featuredStartX;
let featuredStartWidth;

featuredHandle.addEventListener('pointerdown', (event) => {
  featuredStartX = event.clientX;
  featuredStartWidth = featured.getBoundingClientRect().width;
  featuredHandle.setPointerCapture(event.pointerId);
});

featuredHandle.addEventListener("pointermove", (event) => {
  if(!featuredHandle.hasPointerCapture(event.pointerId)) return;
  const newWidth = featuredStartWidth - (event.clientX - featuredStartX);
  featured.style.width = `${Math.max(120, newWidth)}px`;
});

// .terminal vertical div resizing ---------------------------------------------------------------|
const terminal = document.querySelector(".terminal");
const terminalHandle = document.querySelector(".terminal-resize-handle");
let terminalStartY;
let terminalStartHeight;

terminalHandle.addEventListener('pointerdown', (event) => {
  terminalStartY = event.clientY;
  terminalStartHeight = terminal.getBoundingClientRect().height;
  terminalHandle.setPointerCapture(event.pointerId);
});

terminalHandle.addEventListener("pointermove", (event) => {
  if(!terminalHandle.hasPointerCapture(event.pointerId)) return;
  const newHeight = terminalStartHeight - (event.clientY - terminalStartY);
  terminal.style.height = `${Math.max(80, newHeight)}px`;
});
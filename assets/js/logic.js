// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

// Set default mode to dark
let mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});

const form = document.getElementById("blog-form");
const previewContainer = document.getElementById("blog-preview");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const blogTitle = document.getElementById("blog-title").value;
  const blogContent = document.getElementById("blog-content").value;

  const blogHTML = `
		<h1>${blogTitle}</h1>
		<p>By ${username}</p>
		<p>${blogContent}</p>
	`;

  previewContainer.innerHTML = blogHTML;
});

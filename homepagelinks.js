function fetchLinks() {
  const script = document.createElement("script");
  script.src =
    "https://script.google.com/macros/s/AKfycbxgJBDGdCWLrOBFQMl2bfTXyE6YoytlFA2GHZ5x_XRLY3bjX1l4YpRaqG8H6EXa2TrE/exec?callback=displayLinks"; // JSONP request
  document.body.appendChild(script);
}

function displayLinks(links) {
  const linkContainer = document.getElementById("links");
  linkContainer.innerHTML = "";

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.className = "link";
    anchor.href = link.href;
    anchor.target = link.target;
    anchor.textContent = link.text;
    anchor.style.display = "block";

    linkContainer.appendChild(anchor);
  });
}

// Fetch links on page load
fetchLinks();

function fetchLinks() {
  const cacheKey = "cachedLinks";
  const cacheTimeKey = "cachedLinks_time";
  const cacheTTL = 60 * 60 * 1000; // 1-hour cache expiration
  const loader = document.getElementById("loader"); // Get spinner

  // Show loading spinner
  loader.style.display = "block";

  // Check cache
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTimestamp = Number(localStorage.getItem(cacheTimeKey));

  if (
    cachedData &&
    cachedTimestamp &&
    Date.now() - cachedTimestamp < cacheTTL
  ) {
    console.log("Using cached JSONP data");
    displayLinks(JSON.parse(cachedData));
    return;
  }

  console.log("Fetching new JSONP data...");

  // Create script element for JSONP request
  const script = document.createElement("script");
  script.src =
    "https://script.google.com/macros/s/AKfycbxgJBDGdCWLrOBFQMl2bfTXyE6YoytlFA2GHZ5x_XRLY3bjX1l4YpRaqG8H6EXa2TrE/exec?callback=handleJSONPResponse";
  document.body.appendChild(script);
}

// Callback function to handle JSONP response
function handleJSONPResponse(links) {
  console.log("Fetched new JSONP data:", links);

  // Cache the data
  localStorage.setItem("cachedLinks", JSON.stringify(links));
  localStorage.setItem("cachedLinks_time", Date.now());

  displayLinks(links);
}

function displayLinks(links) {
  const linkContainer = document.getElementById("links");
  const loader = document.getElementById("loader"); // Get spinner element

  linkContainer.innerHTML = "";
  loader.style.display = "none"; // Hide spinner

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

function fetchLinks() {
  const sheetId = "1WyjAf3siIsdlt35t__sw9cOBjVRjX9SOY4lJOw7TsS4";
  const apiKey = "API_KEY"
  const range = "links!A:C"; // Data is in columns A (text), B (href), C (target)
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  const loader = document.getElementById("loader"); // Get loading spinner element
  loader.style.display = "block"; // Show loading spinner

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = "none"; // Hide spinner
      if (data.values) {
        displayLinks(data.values);
      } else {
        console.error("No data found in the sheet.");
      }
    })
    .catch((error) => {
      loader.style.display = "none"; // Hide spinner
      console.error("Error fetching data:", error);
      const linkContainer = document.getElementById("links");
      linkContainer.textContent = "Error fetching data.";
    });
}

function displayLinks(rows) {
  const linkContainer = document.getElementById("links");
  linkContainer.innerHTML = ""; // Clear existing links

  rows.slice(1).forEach((row) => {
    const text = row[0];
    const href = row[1];
    const target = row[2] || "_blank"; // Default to _blank if missing

    const anchor = document.createElement("a");
    anchor.className = "link";
    anchor.href = href;
    anchor.target = target;
    anchor.textContent = text;
    anchor.style.display = "block";

    linkContainer.appendChild(anchor);
  });
}

// Fetch links on page load
fetchLinks();

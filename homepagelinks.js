const links = [
  {
    text: "Save Sanjay Van Email Petition",
    href: "https://savesanjayvann.thereisnoearthb.com/mail",
    target: "_blank",
  },
  {
    text: "UPI Magic Link: supercharge your fundraising",
    href: "https://upi.thereisnoearthb.com/generator.html",
    target: "_blank",
  },
  {
    text: "Save Satoli, Kumaon",
    href: "https://savesatoli.thereisnoearthb.com",
    target: "_blank",
  },
  {
    text: "Save Behali, Assam Petition",
    href: "https://www.instagram.com/ar/205867644888958",
    target: "_blank",
  },
  {
    text: "Save Bhitarkanika, Odisha",
    href: "https://savebhitarkanika.thereisnoearthb.com",
    target: "_blank",
  },
  {
    text: "Save Chatola, Kumaon",
    href: "https://savechatola.thereisnoearthb.com",
    target: "_blank",
  },
  {
    text: "Buxwaha Research Note",
    href: "https://thereisno.earth/b/buxwaha-research-note.html",
    target: "_blank",
  },
  {
    text: "Free Hidme",
    href: "https://freehidme.thereisnoearthb.com/",
    target: "_blank",
  },
  {
    text: "Save Mohund, Uttarakhand",
    href: "https://savemohund.thereisnoearthb.com/",
    target: "_blank",
  },
  {
    text: "Save Sattal",
    href: "https://savesattal.thereisnoearthb.com/",
    target: "_blank",
  },
  {
    text: "Save Dumna",
    href: "https://savedumna.thereisnoearthb.com/",
    target: "_blank",
  },
  {
    text: "Statement of Solidarity: Lakshadweep",
    href: "https://savelakshadweep.thereisnoearthb.com/mail",
    target: "_blank",
  },
  {
    text: "Save Buxwaha",
    href: "https://savebuxwaha.thereisnoearthb.com",
    target: "_blank",
  },
  {
    text: "Covid patient/Suspect patient monitoring sheet",
    href: "https://thereisnoearthb.com/CovidMonitoringSheet",
    target: "_blank",
  },
  {
    text: "Compilation of guided meditations conducted by counseling psychologists for the TINEB well being program",
    href: "http://youtube.com/playlist?list=PLLjoXJQvG3P3uGxVFzKLRGviHBeU_473v",
    target: "_blank",
  },
  {
    text: "Media Mentions",
    href: "https://thereisnoearthb.com/mentions.html",
    target: "_blank",
  },
];

// Get the div where links will be added
const linkContainer = document.getElementById("links");

// Loop through array and create <a> elements programmatically
links.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.className = "link";
  anchor.href = link.href;
  anchor.target = link.target;
  anchor.textContent = link.text;

  linkContainer.appendChild(anchor);
});

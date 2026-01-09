# hackerarchive.github

Independent digital archive focused on game mods, hacking,
politics, cybersecurity and underground digital culture.

Linktree:
https://linktr.ee/hackarchives

---

## 📜 Core archive script (Matrix + News)

Below is a **single unified script** used by the project.
It handles:

- Matrix-style animated background
- News archive data
- Click → scroll → display article details

This script is documented here for archival and reference purposes.

```js
/* =========================
   HACKERARCHIVE CORE SCRIPT
   ========================= */

/* MATRIX BACKGROUND */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffaa";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* NEWS ARCHIVE */
const newsArchive = [
  {
    title: "Massive Game Mod Leak Appears Online",
    meta: "Game Mods • 2026",
    content:
      "A large archive of unreleased game modifications surfaced on underground forums, including experimental mechanics and internal developer tools."
  },
  {
    title: "Political Campaign Databases Exposed",
    meta: "Politics • Data Exposure",
    content:
      "Security researchers confirmed that misconfigured servers exposed sensitive political campaign databases to the public internet."
  },
  {
    title: "New Exploit Targets Legacy Systems",
    meta: "Hacking • Cybersecurity",
    content:
      "A newly discovered exploit is actively targeting outdated enterprise systems still in production environments."
  }
];

/* NEWS HANDLER */
function openNews(index) {
  const details = document.getElementById("details");

  document.getElementById("detailsTitle").textContent =
    newsArchive[index].title;

  document.getElementById("detailsMeta").textContent =
    newsArchive[index].meta;

  document.getElementById("detailsContent").textContent =
    newsArchive[index].content;

  details.classList.add("active");
  details.scrollIntoView({ behavior: "smooth" });
}

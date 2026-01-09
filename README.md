

````md
# hackerarchive.github

Independent digital archive focused on:
- Game mods
- Hacking & cybersecurity
- Politics & digital leaks
- Underground internet culture

Live links:
- https://hackerarchive.github
- https://linktr.ee/hackarchives

---

## ⚙️ GitHub Pages configuration (YAML)

This project uses GitHub Pages with a minimal configuration.

```yml
# _config.yml
title: hackerarchive.github
description: Digital archive of mods, hacking and political news
theme: null
markdown: kramdown
````

---

## 🧩 Matrix background script (documented)

The Matrix background is implemented using HTML Canvas.
Below is the **core logic**, documented here for archival purposes.

```js
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(0);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffaa";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}
setInterval(drawMatrix, 50);
```

---

## 📰 News archive logic

News entries are handled as JavaScript objects.
Clicking a tile loads the full article and scrolls to the details section.

```js
const newsData = [
  {
    title: "Massive Game Mod Leak Appears Online",
    category: "Game Mods",
    content: "Unreleased modifications surfaced on underground forums..."
  },
  {
    title: "Political Campaign Databases Exposed",
    category: "Politics",
    content: "Misconfigured servers exposed voter profiling data..."
  }
];

function openNews(index) {
  document.getElementById("detailsTitle").innerText = newsData[index].title;
  document.getElementById("detailsContent").innerText = newsData[index].content;
  document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}
```

---

## 🚀 GitHub Actions (optional)

If automation is required, example workflow:

```yml
# .github/workflows/pages.yml
name: Deploy Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: actions/configure-pages@v3
```

---

## ⚠️ Disclaimer

This repository is an **archive and documentation project**.
No illegal content is hosted directly.

---

© 2026 hackerarchive.github

```

---

## 🧠 Co to daje
- ✅ masz **YAML**
- ✅ masz **skrypt w README**
- ✅ GitHub to łyka bez problemu
- ✅ wygląda „technicznie / archiwalnie”
- ✅ pasuje pod **Pages / Actions / Jekyll**

Jeśli chcesz, mogę:
- dostosować pod **konkretny validator**
- zrobić README **pod GitHub profile**
- albo **pod szkołę / projekt / regulamin**

Napisz **do czego dokładnie wymagają tego `.yml`**, a dopnę idealnie 🔥
```

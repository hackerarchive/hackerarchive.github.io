<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>hackerarchive.github</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
}

html {
    scroll-behavior: smooth;
}

/* MATRIX CANVAS */
#matrix {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: black;
}

/* CONTENT */
body {
    color: #e6e6e6;
}

.header {
    max-width: 1000px;
    margin: 80px auto;
    padding: 40px;
    background: rgba(0,0,0,0.7);
    border-radius: 16px;
    border: 1px solid rgba(0,255,170,0.3);
    box-shadow: 0 0 40px rgba(0,255,170,0.2);
    text-align: center;
}

.header h1 {
    font-size: 3rem;
    color: #00ffaa;
}

.subtitle {
    color: #9ef5d5;
    margin: 15px 0 25px;
}

.header p {
    line-height: 1.7;
    color: #d0d0d0;
}

/* LINKTREE */
.linktree {
    margin-top: 20px;
}

.linktree a {
    color: #00ffaa;
    text-decoration: none;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(0,255,170,0.4);
    transition: color 0.2s ease, border-color 0.2s ease;
}

.linktree a:hover {
    color: #ffffff;
    border-color: #ffffff;
}

/* NEWS GRID */
.news-section {
    max-width: 1100px;
    margin: 0 auto 80px;
    padding: 0 20px;
}

.news-title {
    text-align: center;
    font-size: 1.6rem;
    color: #00ffaa;
    margin-bottom: 30px;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
}

.news-tile {
    background: rgba(0,0,0,0.65);
    border: 1px solid rgba(0,255,170,0.3);
    border-radius: 14px;
    padding: 22px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.news-tile::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, transparent, rgba(0,255,170,0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.news-tile:hover::before {
    opacity: 1;
}

.news-tile:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 35px rgba(0,255,170,0.4);
}

.news-tile h3 {
    color: #00ffaa;
    margin-bottom: 10px;
    font-size: 1.05rem;
}

.news-tile span {
    font-size: 0.75rem;
    color: #7dddc1;
}

.news-tile p {
    margin-top: 12px;
    font-size: 0.9rem;
    color: #d0d0d0;
}

/* DETAILS */
.details {
    max-width: 1000px;
    margin: 0 auto 100px;
    padding: 40px;
    background: rgba(0,0,0,0.75);
    border-radius: 16px;
    border: 1px solid rgba(0,255,170,0.3);
    box-shadow: 0 0 50px rgba(0,255,170,0.2);
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.details.active {
    opacity: 1;
    transform: translateY(0);
}

.details h2 {
    color: #00ffaa;
}

.details span {
    font-size: 0.8rem;
    color: #7dddc1;
}

.details p {
    margin-top: 20px;
    line-height: 1.8;
    color: #e0e0e0;
}

/* FOOTER */
footer {
    text-align: center;
    color: #666;
    font-size: 0.85rem;
    margin-bottom: 30px;
}

footer span {
    color: #00ffaa;
}
</style>
</head>

<body>

<canvas id="matrix"></canvas>

<div class="header">
    <h1>hackerarchive.github</h1>
    <div class="subtitle">Mods • Politics • Hacking • Digital Archive</div>
    <p>
        Independent archive documenting game mods, political events,
        cybersecurity incidents and underground digital culture.
    </p>

    <div class="linktree">
        <a href="https://linktr.ee/hackarchives" target="_blank">
            linktr.ee/hackarchives
        </a>
    </div>
</div>

<section class="news-section">
    <div class="news-title">Latest Archived News</div>

    <div class="news-grid">
        <div class="news-tile" onclick="openNews(0)">
            <h3>Massive Game Mod Leak Appears Online</h3>
            <span>Game Mods • Community</span>
            <p>Unreleased modifications surface across underground forums.</p>
        </div>

        <div class="news-tile" onclick="openNews(1)">
            <h3>Political Campaign Databases Exposed</h3>
            <span>Politics • Data</span>
            <p>Millions of voter profiles indexed after misconfiguration.</p>
        </div>

        <div class="news-tile" onclick="openNews(2)">
            <h3>New Exploit Targets Legacy Systems</h3>
            <span>Hacking • Cybersecurity</span>
            <p>Zero-day vulnerability actively exploited in the wild.</p>
        </div>

        <div class="news-tile" onclick="openNews(3)">
            <h3>Archiving Mods Before Takedowns</h3>
            <span>Archive • Preservation</span>
            <p>Communities race to preserve disappearing projects.</p>
        </div>
    </div>
</section>

<section id="details" class="details">
    <h2 id="detailsTitle"></h2>
    <span id="detailsMeta"></span>
    <p id="detailsContent"></p>
</section>

<footer>
    © 2026 <span>hackerarchive.github</span> • Independent archive
</footer>

<script>
/* MATRIX EFFECT */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffaa";
    ctx.font = fontSize + "px JetBrains Mono";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

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

/* NEWS DATA */
const newsData = [
    {
        title: "Massive Game Mod Leak Appears Online",
        meta: "Game Mods • Community • 2026",
        content: "A large archive of unreleased game modifications surfaced on underground forums, including experimental mechanics and internal developer tools."
    },
    {
        title: "Political Campaign Databases Exposed",
        meta: "Politics • Data Exposure",
        content: "Security researchers confirmed that misconfigured servers exposed sensitive political campaign databases to the public internet."
    },
    {
        title: "New Exploit Targets Legacy Systems",
        meta: "Hacking • Cybersecurity",
        content: "A newly discovered exploit is targeting outdated enterprise systems, allowing attackers to gain initial access and escalate privileges."
    },
    {
        title: "Archiving Mods Before Takedowns",
        meta: "Archive • Digital Preservation",
        content: "As legal pressure increases, modding communities are racing to preserve projects before they disappear from hosting platforms."
    }
];

function openNews(index) {
    const details = document.getElementById("details");
    document.getElementById("detailsTitle").textContent = newsData[index].title;
    document.getElementById("detailsMeta").textContent = newsData[index].meta;
    document.getElementById("detailsContent").textContent = newsData[index].content;

    details.classList.add("active");
    details.scrollIntoView({ behavior: "smooth" });
}
</script>

</body>
</html>

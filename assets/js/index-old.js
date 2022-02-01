var subtitles = [
    "knows C#",
    "knows C",
    "knows GDScript",
    "knows 68k assembly",
    "knows GLSL",
    "can write Python",
    "can write Lua",

    "uses Godot",
    "can use Unity",
    "can use Love2D",
    "can roll her own game engine",

    "uses Photoshop",
    "uses FL Studio",
    "uses Kdenlive",
    "can use After Effects",

    "uses Ghidra",
    "uses Git",
    "can use IDA",

    "wrote a software audio mixer",
    "wrote a 3D spatial hash",
    "wrote a procedural geometry generator",
    "configured her kernel to avoid corrupted onboard RAM",
    "used to install Arch Linux daily, for fun",
    "implemented palette cycling in a shader",
    "made a gunshot sound like a boulder"
];

var used_subtitles = [];

function setSubtitle() {
    var subtitle = document.querySelector('.header-subtitle');
    var subtitle_to_use = 0;
    if (used_subtitles.length == subtitles.length) {
        used_subtitles = [];
    }
    do {
        subtitle_to_use = Math.floor(Math.random() * subtitles.length);
    } while (used_subtitles.includes(subtitle_to_use));
    subtitle.innerHTML = "..." + subtitles[subtitle_to_use];
    used_subtitles.push(subtitle_to_use);
}

var header_inject = `
<div style="text-align: center; margin-bottom: 70px;">
<h1 style="font-family:daysregular; font-size: 60pt; margin-top: 0; margin-bottom: -10px; letter-spacing: -0.1em;">Amy Wright</h1>
<h4 class="header-subtitle"></h4>
</div>
`;

var header = document.querySelector('.header-inject');

header.insertAdjacentHTML('afterbegin', header_inject);

setSubtitle();

setInterval(setSubtitle, 3000);
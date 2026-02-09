const password = "20022004";
const text = "Hello, You.";
let index = 0;

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === password) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    typeWriter();
  } else {
    document.getElementById("error").innerText = "Wrong. Try again.";
  }
}

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  }
}

function startExperience() {
  document.querySelector(".story").scrollIntoView({ behavior: "smooth" });
}

function toggleMusic() {
  const music = document.getElementById("bgm");
  music.paused ? music.play() : music.pause();
}

function openBox() {
  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
}

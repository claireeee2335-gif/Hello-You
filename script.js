const PASSWORD = "20022004";
const text = "Hello, You.";
let index = 0;

function unlock() {
  if (document.getElementById("password").value === PASSWORD) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("experience").classList.remove("hidden");
    typeWriter();
  } else {
    document.getElementById("error").innerText = "Wrong.";
  }
}

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  }
}

function scrollToSection(i) {
  document.querySelectorAll(".section")[i].scrollIntoView({ behavior: "smooth" });
}

function toggleMusic() {
  const m = document.getElementById("music");
  m.paused ? m.play() : m.pause();
}

function openBox() {
  document.getElementById("letter").classList.remove("hidden");
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
}

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


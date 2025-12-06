// Mostrar a timeline somente após clicar no botão
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const sections = document.querySelectorAll(".hidden-section");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("fade-out");

  setTimeout(() => {
    sections.forEach(sec => sec.classList.add("show"));
  }, 600);
});

// Animação dos itens da timeline ao rolar
const items = document.querySelectorAll(".timeline-item");

function showOnScroll() {
  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;

    if (itemTop < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

const music = document.getElementById("background-music");

// Iniciar timeline + música
startBtn.addEventListener("click", () => {
  startScreen.classList.add("fade-out");

  setTimeout(() => {
    sections.forEach(sec => sec.classList.add("show"));
  }, 600);

  // Iniciar trilha sonora após clique
  music.volume = 0.6;
  music.play();
});

// Pausar música quando qualquer vídeo começar
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("play", () => {
    music.pause();
  });

  // Retomar música quando o vídeo acabar
  video.addEventListener("ended", () => {
    music.play();
  });
});

function createHeart() {
  const container = document.getElementById("heart-rain");

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  // posição horizontal aleatória
  heart.style.left = Math.random() * 100 + "vw";

  // tamanho aleatório
  const size = Math.random() * (40 - 15) + 15;
  heart.style.fontSize = size + "px";

  // duração aleatória
  const duration = Math.random() * (5 - 2) + 2;
  heart.style.animationDuration = duration + "s";

  container.appendChild(heart);

  // remover o coração ao final da animação
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// cria um coração novo a cada 250ms
setInterval(createHeart, 250);


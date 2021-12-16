// VARIABLES

let score = 0;

const scoreShow = document.querySelector(".score");
const cont = document.querySelector(".cont");
const leg = document.querySelector(".legmsg");
const menu = document.querySelector(".menu");
const play = document.querySelector("#btn-play");
const light = document.querySelector(".btn-slide");
const btnSun = document.querySelector(".btn-sun");
// const btnNight = document.querySelector('.btn-night')

// AUDIO

const shoot = () => {
  const audio = new Audio();
  audio.src = "shoot.mp3";
  audio.play();
};

const shootBonus = () => {
  const audio = new Audio();
  audio.src = "shootBonus.mp3";
  audio.play();
};

const applause = () => {
  const audio = new Audio();
  audio.src = "applause.mp3";
  audio.play();
};

// BUBLE GEN

const bubbleBottom = () => {
  setInterval(() => {
    let bubble = document.createElement("span");
    let second = Math.random() * 10 + 7 + "s";
    let size = Math.random() * 100 + 75;
    let leftLeft = 100 + "%";
    let leftRight = 0 + "%";
    let left = Math.random() * 100;

    bubble.className = "bubble";
    bubble.style.height = size + "px";
    bubble.style.width = size + "px";
    bubble.style.top = Math.random() * 100 + 100 + "%";
    bubble.style.left = left + "%";
    bubble.style.setProperty("--s", second);
    if (left < 40) {
      bubble.style.setProperty("--l", leftLeft);
    } else if (left > 60) {
      bubble.style.setProperty("--l", leftRight);
    } else {
      bubble.style.setProperty("--l", "50%");
    }
    document.body.appendChild(bubble);
    setInterval(() => {
      bubble.remove();
    }, 15000);
  }, 750);
  setInterval(() => {
    let bubbleBonus = document.createElement("p");
    let second = Math.random() * 10 + 7 + "s";
    let size = Math.random() * 100 + 45;
    let leftLeft = 100 + "%";
    let leftRight = 0 + "%";
    let left = Math.random() * 100;

    bubbleBonus.className = "bubble-bonus-bottom";
    bubbleBonus.innerHTML = "+10";
    bubbleBonus.style.height = size + "px";
    bubbleBonus.style.width = size + "px";
    bubbleBonus.style.top = Math.random() * 100 + 100 + "%";
    bubbleBonus.style.left = left + "%";
    bubbleBonus.style.setProperty("--s", second);
    if (left < 40) {
      bubbleBonus.style.setProperty("--l", leftLeft);
    } else if (left > 60) {
      bubbleBonus.style.setProperty("--l", leftRight);
    } else {
      bubbleBonus.style.setProperty("--l", "50%");
    }
    document.body.appendChild(bubbleBonus);
    setInterval(() => {
      bubbleBonus.remove();
    }, 18000);
  }, 7500);
};

const bubbleLeft = () => {
  setInterval(() => {
    let bubble = document.createElement("span");
    let second = Math.random() * 10 + 9 + "s";
    let size = Math.random() * 100 + 75;
    let topTop = 95 + "%";
    let topBottom = 5 + "%";
    let top = Math.random() * 80;

    bubble.className = "bubble-side";
    bubble.style.height = size + "px";
    bubble.style.width = size + "px";
    bubble.style.top = top + "%";
    bubble.style.left = -Math.random() * 50 + "%";
    bubble.style.setProperty("--s", second);
    if (top < 40) {
      bubble.style.setProperty("--t", topTop);
    } else if (top > 60) {
      bubble.style.setProperty("--t", topBottom);
    } else {
      bubble.style.setProperty("--t", "50%");
    }

    document.body.appendChild(bubble);
    setInterval(() => {
      bubble.remove();
    }, 15000);
  }, 750);

  setInterval(() => {
    let bubbleBonus = document.createElement("p");
    let second = Math.random() * 10 + 9 + "s";
    let size = Math.random() * 100 + 45;
    let topTop = 95 + "%";
    let topBottom = 5 + "%";
    let top = Math.random() * 80;

    bubbleBonus.className = "bubble-bonus-left";
    bubbleBonus.innerHTML = "+10";
    bubbleBonus.style.height = size + "px";
    bubbleBonus.style.width = size + "px";
    bubbleBonus.style.top = top + "%";
    bubbleBonus.style.left = -Math.random() * 50 + "%";
    bubbleBonus.style.setProperty("--s", second);
    if (top < 40) {
      bubbleBonus.style.setProperty("--t", topTop);
    } else if (top > 60) {
      bubbleBonus.style.setProperty("--t", topBottom);
    } else {
      bubbleBonus.style.setProperty("--t", "50%");
    }
    document.body.appendChild(bubbleBonus);
    setInterval(() => {
      bubbleBonus.remove();
    }, 18000);
  }, 7500);
};

const bubbleRight = () => {
  setInterval(() => {
    let bubble = document.createElement("span");
    let second = Math.random() * 10 + 9 + "s";
    let size = Math.random() * 100 + 75;
    let topTop = 95 + "%";
    let topBottom = 5 + "%";
    let top = Math.random() * 80;

    bubble.className = "bubble-right";
    bubble.style.height = size + "px";
    bubble.style.width = size + "px";
    bubble.style.top = top + "%";
    bubble.style.left = Math.random() * 100 + 100 + "%";
    bubble.style.setProperty("--s", second);
    if (top < 40) {
      bubble.style.setProperty("--t", topTop);
    } else if (top > 60) {
      bubble.style.setProperty("--t", topBottom);
    } else {
      bubble.style.setProperty("--t", "50%");
    }

    document.body.appendChild(bubble);
    setInterval(() => {
      bubble.remove();
    }, 15000);
  }, 750);

  setInterval(() => {
    let bubbleBonus = document.createElement("p");
    let second = Math.random() * 10 + 9 + "s";
    let size = Math.random() * 100 + 45;
    let topTop = 95 + "%";
    let topBottom = 5 + "%";
    let top = Math.random() * 80;

    bubbleBonus.className = "bubble-bonus-right";
    bubbleBonus.innerHTML = "+10";
    bubbleBonus.style.height = size + "px";
    bubbleBonus.style.width = size + "px";
    bubbleBonus.style.top = top + "%";
    bubbleBonus.style.left = Math.random() * 100 + 100 + "%";
    bubbleBonus.style.setProperty("--s", second);
    if (top < 40) {
      bubbleBonus.style.setProperty("--t", topTop);
    } else if (top > 60) {
      bubbleBonus.style.setProperty("--t", topBottom);
    } else {
      bubbleBonus.style.setProperty("--t", "50%");
    }
    document.body.appendChild(bubbleBonus);
    setInterval(() => {
      bubbleBonus.remove();
    }, 1800);
  }, 7500);
};

const bubbleTop = () => {
  setInterval(() => {
    let bubble = document.createElement("span");
    let second = Math.random() * 10 + 9 + "s";
    let size = Math.random() * 100 + 75;
    let leftLeft = 100 + "%";
    let leftRight = 0 + "%";
    let top = -Math.random() * 100 - 25;
    let left = Math.random() * 100;

    bubble.className = "bubble-top";
    bubble.style.height = size + "px";
    bubble.style.width = size + "px";
    bubble.style.top = top + "%";
    bubble.style.left = left + "%";
    bubble.style.setProperty("--s", second);
    if (left < 40) {
      bubble.style.setProperty("--l", leftLeft);
    } else if (left > 60) {
      bubble.style.setProperty("--l", leftRight);
    } else {
      bubble.style.setProperty("--l", "50%");
    }

    document.body.appendChild(bubble);
    setInterval(() => {
      bubble.remove();
    }, 15000);
  }, 750);

  setInterval(() => {
    let bubbleBonus = document.createElement("p");
    bubbleBonus.innerHTML = "+10";
    let second = Math.random() * 10 + 9 + "s";
    let size = Math.random() * 100 + 45;
    let leftLeft = 100 + "%";
    let leftRight = 0 + "%";
    let top = -Math.random() * 100 - 25;
    let left = Math.random() * 100;

    bubbleBonus.className = "bubble-bonus-top";
    bubbleBonus.style.height = size + "px";
    bubbleBonus.style.width = size + "px";
    bubbleBonus.style.top = top + "%";
    bubbleBonus.style.left = left + "%";
    bubbleBonus.style.setProperty("--s", second);
    if (left < 40) {
      bubbleBonus.style.setProperty("--l", leftLeft);
    } else if (left > 60) {
      bubbleBonus.style.setProperty("--l", leftRight);
    } else {
      bubbleBonus.style.setProperty("--l", "50%");
    }
    document.body.appendChild(bubbleBonus);
    setInterval(() => {
      bubbleBonus.remove();
    }, 18000);
  }, 7500);
};

// GAME

const gameCall = () => {
  bubbleBottom();
  bubbleLeft();
  bubbleRight();
  bubbleTop();
};

const countPlay = () => {
  const countDown = document.querySelector(".countdown");
  countDown.textContent = "3";
  countDown.style.opacity = "1";
  countDown.style.transform = "scale(1)";
  setTimeout(() => {
    countDown.style.opacity = "0";
    countDown.style.transform = "scale(5)";
  }, 1000);
  setTimeout(() => {
    countDown.style.color = "#FFC133";
    countDown.textContent = "2";
    countDown.style.opacity = "1";
    countDown.style.transform = "scale(1)";
  }, 2500);
  setTimeout(() => {
    countDown.style.opacity = "0";
    countDown.style.transform = "scale(5)";
  }, 4000);
  setTimeout(() => {
    countDown.style.color = "green";
    countDown.textContent = "1";
    countDown.style.opacity = "1";
    countDown.style.transform = "scale(1)";
  }, 5500);
  setTimeout(() => {
    countDown.style.opacity = "0";
    countDown.style.transform = "scale(5)";
  }, 7000);
  setTimeout(() => {
    countDown.style.color = "green";
    countDown.textContent = "GO !!";
    countDown.style.opacity = "1";
    countDown.style.transform = "scale(1)";
  }, 8500);
  setTimeout(() => {
    countDown.style.opacity = "0";
    countDown.style.transform = "scale(5)";
  }, 10000);
  setTimeout(() => {
    countDown.remove();
    gameCall();
    scoreShow.style.visibility = "visible";
    scoreShow.style.opacity = "1";
    window.addEventListener("click", (e) => {
      if (e.target.localName == "span") {
        shoot();
        e.target.remove();
        score += 1;
        scoreShow.textContent = score;
        if (score > 400) {
          scoreShow.classList.add("legend");
          leg.style.display = "block";
          applause();
        } else if (score > 200) {
          scoreShow.style.color = "#FF33FC";
        } else if (score > 150) {
          scoreShow.style.color = "#33FFFF";
        } else if (score > 100) {
          scoreShow.style.color = "#64FF33";
        } else if (score > 50) {
          scoreShow.style.color = "#FFD433";
        }
      } else if (e.target.localName == "p") {
        shootBonus();
        e.target.remove();
        score += 10;
        scoreShow.textContent = score;
        if (score > 400) {
          scoreShow.classList.add("legend");
          leg.style.display = "block";
          applause();
        } else if (score > 200) {
          scoreShow.style.color = "#FF33FC";
        } else if (score > 150) {
          scoreShow.style.color = "#33FFFF";
        } else if (score > 100) {
          scoreShow.style.color = "#64FF33";
        } else if (score > 50) {
          scoreShow.style.color = "#FFD433";
        }
      }
    });
  }, 12000);
};

// MODE NUIT / JOUR

const day = () => {
  btnSun.className = "btn-night";
  btnSun.style.visibility = "visible";
  btnSun.innerHTML = '<i class="fas fa-moon"></i>';
  cont.style.backgroundColor = "black";
  light.style.border = "1mm solid white";
  menu.style.borderColor = "white";
};

const night = () => {
  btnSun.className = "btn-sun";
  btnSun.innerHTML = '<i class="fas fa-sun"></i>';
  cont.style.backgroundColor = "white";
  light.style.border = "1mm solid black";
  menu.style.borderColor = "black";
};

// LISTENER

window.addEventListener("load", () => {
  menu.style.opacity = "1";
  if (screen.width > 900) {
    menu.style.top = "25%";
  }
});

play.addEventListener("click", () => {
  menu.style.top = "-50%";
  menu.style.opacity = "0";
  setTimeout(countPlay, 2000);
});

light.addEventListener("click", () => {
  if (btnSun.classList.contains("btn-sun")) {
    day()
  } else if (btnSun.classList.contains("btn-night")) {
    night()
  }
});

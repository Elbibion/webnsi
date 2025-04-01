
function goToPage2() {
  window.location.href = "page-2.html";
}

function scrollToGallery(galleryId) {
  const target = document.getElementById(galleryId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}



window.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.getElementById("shopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      shopBtn.style.opacity = "1";
      shopBtn.style.pointerEvents = "auto";
    } else {
      shopBtn.style.opacity = "0";
      shopBtn.style.pointerEvents = "none";
    }
  });
});

// Lightbox
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".image-box img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");

  input.addEventListener("change", () => {
    document.body.classList.toggle("light-theme", !input.checked);
  });
});


function goToPage2() {
  window.location.href = "page-2.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.getElementById("shopBtn");
  const overlay = document.getElementById("overlay");
  const nameStep = document.getElementById("nameStep");
  const welcomeStep = document.getElementById("welcomeStep");
  const usernameInput = document.getElementById("username");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const submitName = document.getElementById("submitName");

  shopBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    nameStep.classList.remove("hidden");
    welcomeStep.classList.add("hidden");
    usernameInput.value = "";
  });

  submitName.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if (name) {
     const fakeIP = generateFakeIP();
welcomeMessage.innerHTML = `Bienvenue, <strong>${name}, je viens de voler tes mots de passes et j'ai ton IP</strong> !<br><br>Adresse IP : <code>${fakeIP}</code>`;

      nameStep.classList.add("hidden");
      welcomeStep.classList.remove("hidden");
    }
  });
});

function generateFakeIP() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".");
}


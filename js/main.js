document.addEventListener("DOMContentLoaded", () => {
  // Добавили .contact-card через запятую к остальным классам
  const animatedItems = document.querySelectorAll(
    ".skill-card, .project-card, .contact-card",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Отключаем слежку после активации
        }
      });
    },
    {
      threshold: 0.05, // Срабатывает, как только край карточки показался на экране
      rootMargin: "0px 0px -30px 0px",
    },
  );

  animatedItems.forEach((item) => {
    observer.observe(item);
  });
});

(function () {
  const cards = document.querySelectorAll("#carousel .project-card");
  let current = 0;

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove(
        "active",
        "prev",
        "next",
        "hidden-left",
        "hidden-right",
      );
      const diff = i - current;
      if (diff === 0) card.classList.add("active");
      else if (diff === -1) card.classList.add("prev");
      else if (diff === 1) card.classList.add("next");
      else if (diff < -1) card.classList.add("hidden-left");
      else if (diff > 1) card.classList.add("hidden-right");

      // Управление видео
      const video = card.querySelector("video");
      if (video) {
        if (diff === 0) {
          video.play().catch((e) => console.warn("Video play failed:", e));
        } else {
          video.pause();
          video.currentTime = 0; // сброс на начало (опционально)
        }
      }
    });
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    current = (current + 1) % cards.length;
    updateCarousel();
  });

  // Автоматическое воспроизведение первого видео при старте
  updateCarousel();
})();

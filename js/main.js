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

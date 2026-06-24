document.addEventListener("DOMContentLoaded", () => {
  // Выбираем сразу все анимируемые элементы на странице
  const animatedItems = document.querySelectorAll(".skill-card, .project-card");

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

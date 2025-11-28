document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navegacao-item");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    link.classList.remove("active");
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

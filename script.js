document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');
  
    navToggle.addEventListener('click', () => {
      navUl.classList.toggle('open');
    });
  
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  });
  
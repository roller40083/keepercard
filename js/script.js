const sections = Array.from(document.querySelectorAll('.section-slide'));
let isScrolling = false;

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return;
  isScrolling = true;
  sections[index].scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => { isScrolling = false; }, 900); // блокируем повторный скролл на время анимации
}

let currentSection = 0;

window.addEventListener('wheel', function(e) {
  if (isScrolling) return;
  if (e.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++;
    scrollToSection(currentSection);
  } else if (e.deltaY < 0 && currentSection > 0) {
    currentSection--;
    scrollToSection(currentSection);
  }
});
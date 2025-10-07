const tabs = document.querySelectorAll('.nav__tab');
const navTabsContainer = document.querySelector('.nav__tabs-container');
const tabsSections = document.querySelectorAll('.section__tab');

document.addEventListener('DOMContentLoaded', () => {
    // Initial Active Section
    const initialActiveSection = document.querySelector('.section_tab--active');

    applyAnimations(initialActiveSection);
});

// Menu nav
function tabsFunction(
    contenedor, 
    contenido, 
    btns, 
    classBtns, 
    classBtnActive, 
    contentActive, 
    numTextContentActive
) {
    contenedor.addEventListener('click', function (e) {
        const clicked = e.target.closest(classBtns);

        if (!clicked) return;

        // Resetear clases activas
        btns.forEach(t => t.classList.remove(classBtnActive));
        contenido.forEach(c => c.classList.remove(contentActive));

        // Activar nueva pestaña
        clicked.classList.add(classBtnActive);
        const activeSection = document.querySelector(`.${numTextContentActive}${clicked.dataset.tab}`);
        activeSection.classList.add(contentActive);
        window.scroll(0, 0);

        applyAnimations(activeSection);
    });
};

function applyAnimations(section) {
    if (!section) return;

    const animatableElements = section.querySelectorAll('[data-animation]');

    animatableElements.forEach(el => {
        const animationClass = el.dataset.animation;
        el.classList.remove(animationClass);
        void el.offsetWidth; 
        el.classList.add(animationClass);
    });
};

tabsFunction(
    navTabsContainer, 
    tabsSections, 
    tabs, 
    '.nav__tab', 
    'nav__tab--active', 
    'section_tab--active',
    'section__tab--'
);

//Observer

document.addEventListener("DOMContentLoaded", () => {
    const animatedItem = document.querySelectorAll(".animated");
    const animatedScale = document.querySelectorAll('.animated-scale')
  
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("animated-item");
                    entry.target.classList.add("animated-scale-item");
                }, index * 100);
                } else {
                    entry.target.classList.remove("animated-item");
                    entry.target.classList.remove("animated-scale-item");
                }
            });
        },{
            threshold: 0.1,
        }
    );
    
    animatedScale.forEach(item => observer.observe(item));
    animatedItem.forEach(item => observer.observe(item));
});
  
const menuBtn = document.querySelector('.icon-menu-content');
const menu = document.querySelector('.aside-nav');
const closeMenuBtn = document.querySelector('.close-icon')

// Open menu
menuBtn.addEventListener('click', ()=> {
    menu.classList.add('active');
});

// Close menu
closeMenuBtn.addEventListener('click', ()=>{
    menu.classList.remove('active')
});

document.querySelectorAll('.nav__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


toggleMenu = () => {
    const el = document.querySelector('.menu-trigger');
    const menu  = document.querySelector('.main-nav');
    
    if(el.classList.contains('active')) {
        el.classList.remove('active');
        menu.classList.remove('open');
    } else {
        el.classList.add('active');
        menu.classList.add('open');
    }
}
document.querySelector('.menu-trigger').addEventListener('click', toggleMenu);
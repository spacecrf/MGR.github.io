let lastScrollTop = 0; 
const nav = document.getElementById('main-nav'); 

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        nav.style.top = '-70px';
    } else {
        nav.style.top = '0';
    }
    
    lastScrollTop = scrollTop;
});

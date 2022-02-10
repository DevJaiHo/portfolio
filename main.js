// scroll to menu

const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', (event) => {
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return; 
    }
    navbarMenu.classList.remove('open')
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
})

// Navbar toggle btn for mobile view
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', (event) => {
    navbarMenu.classList.toggle('open');
})
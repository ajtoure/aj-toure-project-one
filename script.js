const blogNav = {};

blogNav.myNav = document.querySelector('.head__nav');
blogNav.navList = document.querySelector('.nav__list');
blogNav.burgerButton = document.querySelector('.burger__menu');

// attach an event listener to the hamburger menu icon

blogNav.menuToggle = () => {
    blogNav.burgerButton.addEventListener('click', function() {
        blogNav.navList.classList.toggle('.nav__list--toggle', true);
    });
}

// when the icon is clicked on, the class of the menu will change to make it visible

// the new menu will include an x icon

// attach an event listener to the x icon

// if the x icon is clicked on, the menu will disappear and only the hamburger menu will remain
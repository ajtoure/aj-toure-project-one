const siteMenu = {};
siteMenu.navHeader = document.getElementById("headNav");
siteMenu.navBurger = document.getElementById("burgerMenu");
siteMenu.navList = document.getElementById("navList");

console.log(siteMenu);

siteMenu.navBurger.addEventListener('click', function() {
    if (siteMenu.navList.className === "nav__list") {
        siteMenu.navList.className = "nav__list--toggle";
        siteMenu.navHeader.style.overflow = "visible";
        siteMenu.navBurger.className = "burger__menu--toggle";
    } else if (siteMenu.navList.className === "nav__list--toggle") {
        siteMenu.navList.className = "nav__list";
        siteMenu.navHeader.style.overflow = "hidden";
        siteMenu.navBurger.className = "burger__menu";
    }
});
// when the icon is clicked on, the class of the menu will change to make it visible

// the new menu will include an x icon

// attach an event listener to the x icon

// if the x icon is clicked on, the menu will disappear and only the hamburger menu will remain
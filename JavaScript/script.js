var nav = document.querySelector(".nav-menu"),
            navToggle = document.querySelector(".hamburger-menu");
        if (navToggle) {
        navToggle.addEventListener("click",
        function(e) {
        if (nav.classList.contains('nav-menu--open')) {
            nav.classList.remove('nav-menu--open');
        } else {
            nav.classList.add('nav-menu--open');
        }
        e.preventDefault();
        }, false);
        }

        /* Any click outside of the nav element will close the menu if it's open */
        var specifiedElement = document.querySelector('.navigation');
        document.addEventListener('click', function(event) {
        var isClickInside = specifiedElement.contains(event.target);
        if (!isClickInside && nav.classList.contains('nav-menu--open')) {
            nav.classList.remove('nav-menu--open');
        } 
        });
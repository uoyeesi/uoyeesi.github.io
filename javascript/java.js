document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const sideMenu = document.querySelector('.side-menu');
    const menuItems = sideMenu.querySelectorAll('a');

    // Function to smoothly scroll to the target section
    function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Toggle the side menu and handle menu item clicks
    menuIcon.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
        menuIcon.classList.toggle('active');
    });

    // Add click event listeners to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            const targetSectionId = item.getAttribute('href').substring(1); // Get the target section ID
            scrollToSection(targetSectionId); // Scroll to the target section
            sideMenu.classList.remove('open'); // Close the side menu after clicking a menu item
            menuIcon.classList.remove('active'); // Remove "active" class from the menu icon
        });
    });
});

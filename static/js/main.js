function toggleMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('active');
}

function closeMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
}

// Close mobile menu when clicking outside or on a menu item
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const menuButton = document.getElementById('menu-button');
    
    // Check if click is outside sidebar and not on menu button
    if (!sidebar.contains(event.target) && 
        !menuButton.contains(event.target) && 
        sidebar.classList.contains('mobile-open')) {
        closeMobileMenu();
    }
});
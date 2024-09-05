window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const servicesSection = document.getElementById('services');
    const contactSection = document.getElementById('contact');

    const scrollPosition = window.scrollY + 50; // Adjust the offset as needed

    if (scrollPosition >= contactSection.offsetTop) {
        navbar.className = 'scrolled-contact';
    } else if (scrollPosition >= servicesSection.offsetTop) {
        navbar.className = 'scrolled-services';
    } else if (scrollPosition >= aboutSection.offsetTop) {
        navbar.className = 'scrolled-about';
    } else {
        navbar.className = 'scrolled-home';
    }
});

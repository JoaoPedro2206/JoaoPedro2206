// Seleciona o botão hamburger e o menu de links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Adiciona um evento de 'click' ao botão hamburger
hamburgerMenu.addEventListener('click', () => {
    // Alterna a classe 'active' no botão (para animar o X)
    hamburgerMenu.classList.toggle('active');
    // Alterna a classe 'active' no menu (para mostrar/esconder)
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em um link (opcional, mas bom para UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
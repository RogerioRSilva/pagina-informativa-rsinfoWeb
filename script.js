document.addEventListener('DOMContentLoaded', function() {
// Interatividade para cards de categoria na home
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.card-clickable');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = card.getAttribute('data-category');
            // Redireciona para página específica (futuro) ou exibe alerta
            // window.location.href = category + '.html';
            alert('Em breve: dicas de ' + category.charAt(0).toUpperCase() + category.slice(1));
        });
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
});

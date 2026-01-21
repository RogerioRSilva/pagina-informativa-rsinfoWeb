// ============================================
// RS INFOWEB - JAVASCRIPT MODERNO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // --- TESTAR SE BOOTSTRAP ESTÁ CARREGADO ---
    console.log('Bootstrap carregado:', typeof bootstrap !== 'undefined');
    console.log('jQuery necessário?:', typeof $ !== 'undefined');
    
    // --- GARANTIR QUE MODAIS FUNCIONEM ---
    if (typeof bootstrap !== 'undefined') {
        console.log('Bootstrap Modal disponível:', typeof bootstrap.Modal !== 'undefined');
        
        // Forçar inicialização dos modais
        document.querySelectorAll('.modal').forEach(modalEl => {
            console.log('Modal encontrado:', modalEl.id);
        });
    }
    // --- INICIALIZAR PARTÍCULAS NO FUNDO ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#0077ff', '#00a8ff', '#00ff88']
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00a8ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // --- NAVBAR COM EFEITO DE SCROLL ---
    let lastScroll = 0;
    const navbar = document.querySelector('.custom-navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(15, 12, 41, 0.95)';
            navbar.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.7)';
        } else {
            navbar.style.background = 'rgba(15, 12, 41, 0.7)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        }
        
        lastScroll = currentScroll;
    });

    // --- INTERATIVIDADE DOS CARDS ---
    const categoryCards = document.querySelectorAll('.card-clickable');
    
    categoryCards.forEach(card => {
        // Acessibilidade - navegação por teclado (Bootstrap gerencia o modal)
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Buscar o data-bs-target do card e acionar o modal corretamente
                const targetModal = card.getAttribute('data-bs-target');
                if (targetModal) {
                    const modalElement = document.querySelector(targetModal);
                    if (modalElement && typeof bootstrap !== 'undefined') {
                        const modal = new bootstrap.Modal(modalElement);
                        modal.show();
                    }
                }
            }
        });
    });

    // --- ANIMAÇÃO DE ENTRADA DOS ELEMENTOS ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card-tech').forEach(card => {
        observer.observe(card);
    });

    // --- EFEITO DE FADE SUAVE NO CARREGAMENTO ---
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    console.log('🚀 RS InfoWeb - Site modernizado carregado com sucesso!');
});


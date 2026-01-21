// ============================================
// RS INFOWEB - JAVASCRIPT MODERNO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
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

    // --- SISTEMA DE EXPANSÃO DE CARDS ---
    const categoryCards = document.querySelectorAll('.card-clickable');
    let activeSection = null;
    let activeCard = null;
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const detailsId = 'details' + category.charAt(0).toUpperCase() + category.slice(1);
            const detailsSection = document.getElementById(detailsId);
            
            if (!detailsSection) return;
            
            // Se clicar no mesmo card que já está aberto, fecha
            if (activeSection === detailsSection && detailsSection.style.display === 'block') {
                closeSection(detailsSection, this);
                activeSection = null;
                activeCard = null;
                return;
            }
            
            // Fecha a seção ativa anterior (se houver)
            if (activeSection && activeSection !== detailsSection) {
                closeSection(activeSection, activeCard);
            }
            
            // Abre a nova seção
            openSection(detailsSection, this);
            activeSection = detailsSection;
            activeCard = this;
        });
        
        // Acessibilidade - navegação por teclado
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            // Navegação entre cards com setas
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const cards = Array.from(categoryCards);
                const currentIndex = cards.indexOf(this);
                let nextIndex;
                
                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % cards.length;
                } else {
                    nextIndex = (currentIndex - 1 + cards.length) % cards.length;
                }
                
                cards[nextIndex].focus();
            }
        });
    });
    
    // Botões de fechar nas seções de detalhes
    document.querySelectorAll('.btn-close-details').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const section = this.closest('.details-section');
            closeSection(section, activeCard);
            activeSection = null;
            
            // Retorna foco ao card que abriu a seção
            if (activeCard) {
                activeCard.focus();
                activeCard = null;
            }
        });
        
        // Suporte para fechar com Escape
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Fechar seção com tecla Escape globalmente
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && activeSection && activeSection.style.display === 'block') {
            closeSection(activeSection, activeCard);
            if (activeCard) {
                activeCard.focus();
            }
            activeSection = null;
            activeCard = null;
        }
    });
    
    // Função para abrir seção com animação
    function openSection(section, card) {
        // Atualiza ARIA attributes
        section.setAttribute('aria-hidden', 'false');
        if (card) {
            card.setAttribute('aria-expanded', 'true');
            card.classList.add('card-active');
        }
        
        section.style.display = 'block';
        section.style.opacity = '0';
        section.style.transform = 'translateY(-20px)';
        
        // Força o reflow
        section.offsetHeight;
        
        section.style.transition = 'all 0.4s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        
        // Scroll suave até a seção e foca no primeiro elemento interativo
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Move foco para o botão de fechar para melhor acessibilidade
            const closeBtn = section.querySelector('.btn-close-details');
            if (closeBtn) {
                setTimeout(() => closeBtn.focus(), 500);
            }
        }, 100);
    }
    
    // Função para fechar seção com animação
    function closeSection(section, card) {
        // Atualiza ARIA attributes
        section.setAttribute('aria-hidden', 'true');
        if (card) {
            card.setAttribute('aria-expanded', 'false');
            card.classList.remove('card-active');
        }
        
        section.style.opacity = '0';
        section.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            section.style.display = 'none';
        }, 400);
    }

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

    console.log('🚀 RS InfoWeb - Sistema de expansão ativado com sucesso!');
});


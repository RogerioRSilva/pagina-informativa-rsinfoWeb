# RS InfoWeb - Página Informativa

## 📋 Objetivo do Site

Site informativo desenvolvido para a **RS InfoWeb - Assistência Técnica Especializada em Notebooks**, localizada em Franca/SP. O objetivo principal é fornecer aos clientes e visitantes:

- **Dicas profissionais** de manutenção para notebooks, computadores e impressoras
- **Informações de contato** e localização da empresa
- **Interface moderna e acessível** para facilitar o acesso às informações
- **Experiência responsiva** em todos os dispositivos (desktop, tablet e mobile)

## 🎯 Características Principais

### Funcionalidades
- ✅ Navegação por cards interativos com seções expansíveis
- ✅ Dicas detalhadas de manutenção preventiva para três categorias de equipamentos
- ✅ Integração com Google Maps para localização
- ✅ Botões de contato direto via WhatsApp e telefone
- ✅ Design moderno com efeitos glassmorphism e animações suaves

### Acessibilidade
- ✅ Navegação completa por teclado (Tab, Enter, Espaço, Setas, ESC)
- ✅ ARIA attributes para leitores de tela
- ✅ Contraste adequado e textos legíveis
- ✅ Foco visível em elementos interativos
- ✅ Compatível com WCAG 2.1 AA

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Flexbox/Grid
- **JavaScript** - Interatividade e animações
- **Bootstrap 5.3.2** - Framework CSS responsivo
- **Bootstrap Icons** - Ícones vetoriais
- **Particles.js** - Animação de fundo
- **Google Fonts (Inter)** - Tipografia moderna

## 📝 Changelog - Alterações Realizadas

### 🔄 Sistema de Navegação (Principal Mudança)
**Antes:** Modais Bootstrap para exibir dicas  
**Depois:** Seções expansíveis na mesma página

**Mudanças implementadas:**
- Substituição de modais por seções expansíveis com animações
- Sistema de abertura/fechamento suave com transições CSS
- Apenas uma seção aberta por vez
- Scroll automático ao expandir
- Indicador visual no card quando seção está aberta

**Benefícios:**
- Navegação mais fluida sem popup
- Melhor experiência do usuário
- Menor tempo de carregamento
- Mais intuitivo em dispositivos móveis

### ♿ Acessibilidade e Usabilidade
**Implementações:**

1. **ARIA Attributes**
   - `aria-expanded`: Estado do card (aberto/fechado)
   - `aria-controls`: Conexão card → seção
   - `aria-labelledby`: Identificação de títulos
   - `aria-hidden`: Visibilidade para leitores de tela
   - `role="region"`: Definição de regiões

2. **Navegação por Teclado**
   - Enter/Espaço: Abre/fecha seções
   - Setas Direita/Esquerda: Navega entre cards
   - ESC: Fecha seção ativa
   - Tab: Navegação entre elementos
   - Foco automático em botão fechar ao abrir

3. **Feedback Visual**
   - Card ativo com borda verde e sombra intensa
   - Seta rotacionada 90° quando expandido
   - Outline visível ao focar elementos
   - Transições suaves em interações

### 📍 Seção de Localização
**Nova seção adicionada:**
- Google Maps integrado com iframe responsivo
- Informações de contato (endereço, telefone, WhatsApp)
- Botão "Ver no Google Maps" com link direto
- Layout lado a lado (informações + mapa)
- Design com efeito glass harmonizado com o site

**Link Google Maps:** `https://maps.app.goo.gl/PkRGt1n4mSVorcbU9`

### 🖼️ Footer
**Mudança:** Fixo → Relativo

**Antes:** Footer com `position: fixed` sobrepondo conteúdo  
**Depois:** Footer relativo no final da página

**Ajustes:**
- Posicionamento relativo ao fluxo do documento
- Margin-top adequado
- Padding otimizado
- Não sobrepõe mais o conteúdo

### 📱 Responsividade Mobile (Correção Crítica)

#### Problemas Identificados
- Navbar quebrando em telas pequenas
- Overflow horizontal em dispositivos mobile
- Elementos com larguras fixas causando scroll lateral
- Layout desktop afetando visualização mobile

#### Soluções Implementadas

**1. Navbar Mobile**
- `flex-wrap` para quebra de linha
- `min-width` removido de containers fixos
- Logo ajustada (90px → 40px em telas pequenas)
- Botão WhatsApp compacto
- Container fluido sem overflow

**2. Breakpoints Otimizados**
```css
@media (max-width: 991px)  - Tablets/iPad
@media (max-width: 768px)  - Mobile Landscape
@media (max-width: 576px)  - Mobile Portrait
@media (max-width: 400px)  - Telas muito pequenas
```

**3. Prevenção de Overflow**
- `overflow-x: hidden` em html, body e containers
- `max-width: 100vw` em todos elementos principais
- Rows Bootstrap com margens zeradas
- Gutters ajustados
- Cards com `width: 100%` e `max-width: 100%`

**4. Elementos Responsivos**
- Hero: Padding reduzido, títulos menores
- Cards: Altura mínima ajustada (380px → 240px)
- Ícones: Tamanho adaptativo (120px → 70px)
- Seções detalhes: Padding e altura máxima otimizados
- Mapa: Altura responsiva (400px → 250px)
- Footer: Compacto e empilhado

**5. Testes Realizados**
- ✅ Samsung M23 (tela ~6.6")
- ✅ Dispositivos 360px - 414px de largura
- ✅ Orientação portrait e landscape
- ✅ Sem scroll horizontal
- ✅ Todos elementos visíveis e clicáveis

### 🎨 Melhorias Visuais
- Animações suaves em todas transições
- Efeito glassmorphism consistente
- Particles.js no background
- Gradientes modernos
- Sombras e bordas sutis
- Hover states em todos elementos interativos

### 🐛 Correções de Bugs
- ✅ Código CSS duplicado removido
- ✅ Comentário malformado `@media` corrigido
- ✅ Desktop mantido funcionando após ajustes mobile
- ✅ Scrollbar personalizada em seções detalhes
- ✅ Conflitos de z-index resolvidos

## 📂 Estrutura de Arquivos

```
pagina-informativa-rsinfoWeb/
├── index.html          # Página principal
├── style.css           # Estilos e responsividade
├── script.js           # Interatividade e animações
├── README.md           # Documentação (este arquivo)
├── img/                # Imagens do site
│   └── LOGO RSInfoWeb OK.png
└── docs/               # Documentação adicional (se houver)
```

## 🎨 Paleta de Cores

- **Primary Blue:** `#0077ff` → `#00a8ff`
- **Success Green:** `#00ff88` → `#00d084`
- **Dark Background:** `#0a1628` → `#1a3a52`
- **Glass Effect:** `rgba(255, 255, 255, 0.05-0.15)`
- **Text:** `#ffffff` com variações de opacidade

## 🚀 Como Usar

### Visualizar Localmente
1. Clone o repositório
2. Abra `index.html` em um navegador moderno
3. Ou use um servidor local (Live Server, http-server, etc)

### Deploy
- Hospedagem estática (GitHub Pages, Netlify, Vercel)
- Servidor web tradicional (Apache, Nginx)
- Compatível com qualquer ambiente de hospedagem HTML/CSS/JS

## 📞 Informações de Contato

**RS InfoWeb - Assistência Técnica Especializada em Notebooks**

- 📍 Endereço: Rua Dr. Afonso Infante Vieira Filho, 5041 - Franca, SP
- 📱 WhatsApp: (16) 99178-2850
- 📞 Telefone: (16) 99178-2850

## 📊 Métricas de Performance

### Acessibilidade
- ✅ Navegação por teclado 100%
- ✅ ARIA completo
- ✅ Contraste WCAG AA
- ✅ Semântica HTML5

### Responsividade
- ✅ Desktop (> 1200px)
- ✅ Laptop (1024px - 1199px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

### Compatibilidade
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 🔮 Melhorias Futuras Sugeridas

1. **SEO**
   - Meta tags otimizadas
   - Schema.org markup
   - Sitemap XML
   - robots.txt

2. **Performance**
   - Lazy loading de imagens
   - Minificação de CSS/JS
   - Compressão de imagens
   - Service Worker para PWA

3. **Funcionalidades**
   - Formulário de contato
   - Galeria de trabalhos realizados
   - Depoimentos de clientes
   - Blog de dicas técnicas

4. **Analytics**
   - Google Analytics
   - Heatmaps
   - Tracking de conversões

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da RS InfoWeb.

---

**Desenvolvido com ❤️ para RS InfoWeb**  
*Última atualização: Janeiro 2026*

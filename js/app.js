/**
 * Lógica da Aplicação — Adalberto Orly Imóveis
 * Controle de Catálogo, Filtros Vivos, Simulador e Interações Fluidas
 */

document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
  initHeroTabs();
  initScrollSpy();
  initScrollReveal();
  initSimulator();
});

// Estado global de filtros
let activeCategory = 'todos';
let activePurpose = 'todos';
let activeLocation = 'todos';
let activeOrder = 'padrao';

/* ==========================================================================
   1. Catálogo e Filtros Dinâmicos
   ========================================================================== */

function initCatalog() {
  renderProperties(PROPERTIES_DATA);

  // Event listeners para as pílulas de categoria
  const filterPills = document.querySelectorAll('#filterPills .filter-btn');
  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });
}

function renderProperties(properties) {
  const grid = document.getElementById('propertiesGrid');
  const countEl = document.getElementById('catalogCount');

  if (!grid) return;

  if (countEl) {
    countEl.textContent = `${properties.length} ${properties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}`;
  }

  if (properties.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog">
        <h3>Nenhum imóvel corresponde aos critérios selecionados</h3>
        <p>Tente selecionar outra categoria, diminuir os filtros ou fale diretamente com o corretor Adalberto para consultar imóveis em captação recente.</p>
        <button class="filter-btn active" onclick="resetFilters()">Ver Todos os Imóveis</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = properties.map(prop => {
    // Formatar especificações relevantes
    let specsHtml = '';
    if (prop.bedrooms > 0) {
      specsHtml += `
        <span class="feature-pill" title="${prop.bedrooms} Quartos">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"></path></svg>
          ${prop.bedrooms} qtos
        </span>
      `;
    }
    if (prop.parking > 0) {
      specsHtml += `
        <span class="feature-pill" title="${prop.parking} Vagas">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          ${prop.parking} vg
        </span>
      `;
    }
    if (prop.area > 0) {
      specsHtml += `
        <span class="feature-pill" title="Área Total: ${prop.area} m²">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
          ${prop.area} m²
        </span>
      `;
    }

    const purposeLabel = prop.purpose === 'comprar' ? 'Venda' : (prop.purpose === 'alugar' ? 'Locação' : 'Rural');

    return `
      <article class="property-card" data-id="${prop.id}">
        <div class="property-thumb">
          <img src="${prop.image}" alt="${prop.title}" loading="lazy">
          <span class="property-badge">${prop.tag || prop.type}</span>
          <span class="property-purpose-tag">${purposeLabel}</span>
        </div>

        <div class="property-body">
          <div class="property-meta">
            <span class="property-code">${prop.code}</span>
            <span class="property-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${prop.neighborhood}, ${prop.city}
            </span>
          </div>

          <h3 class="property-title">${prop.title}</h3>

          <div class="property-features">
            ${specsHtml || '<span style="font-size:0.8125rem;color:var(--color-text-muted);">Consulte especificações completas</span>'}
          </div>

          <div class="property-footer">
            <div class="property-price">${prop.priceFormatted}</div>
            <button class="btn-card-detail" onclick="openModal('${prop.id}')">Ver Detalhes</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function applyFilters() {
  const purposeSelect = document.getElementById('filterPurpose');
  const locationSelect = document.getElementById('filterLocation');
  const orderSelect = document.getElementById('filterOrder');

  if (purposeSelect) activePurpose = purposeSelect.value;
  if (locationSelect) activeLocation = locationSelect.value;
  if (orderSelect) activeOrder = orderSelect.value;

  let filtered = PROPERTIES_DATA.filter(prop => {
    // Filtro por Categoria (Pílulas)
    if (activeCategory !== 'todos' && prop.type !== activeCategory) {
      return false;
    }

    // Filtro por Finalidade
    if (activePurpose !== 'todos' && prop.purpose !== activePurpose) {
      return false;
    }

    // Filtro por Localização
    if (activeLocation !== 'todos') {
      const matchNeigh = prop.neighborhood.toLowerCase().includes(activeLocation.toLowerCase());
      const matchCity = prop.city.toLowerCase().includes(activeLocation.toLowerCase());
      if (!matchNeigh && !matchCity) return false;
    }

    return true;
  });

  // Ordenação
  if (activeOrder === 'menor-preco') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeOrder === 'maior-preco') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeOrder === 'maior-area') {
    filtered.sort((a, b) => b.area - a.area);
  }

  renderProperties(filtered);
}

function resetFilters() {
  activeCategory = 'todos';
  activePurpose = 'todos';
  activeLocation = 'todos';
  activeOrder = 'padrao';

  document.querySelectorAll('#filterPills .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === 'todos');
  });

  const pSel = document.getElementById('filterPurpose');
  const lSel = document.getElementById('filterLocation');
  const oSel = document.getElementById('filterOrder');
  if (pSel) pSel.value = 'todos';
  if (lSel) lSel.value = 'todos';
  if (oSel) oSel.value = 'padrao';

  renderProperties(PROPERTIES_DATA);
}

function filterByPurpose(purpose) {
  activePurpose = purpose;
  const pSel = document.getElementById('filterPurpose');
  if (pSel) pSel.value = purpose;
  applyFilters();
}

function filterByCategory(category) {
  activeCategory = category;
  document.querySelectorAll('#filterPills .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });
  applyFilters();
}

/* ==========================================================================
   2. Busca no Hero com Abas
   ========================================================================== */

function initHeroTabs() {
  const tabs = document.querySelectorAll('.search-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function filterFromHero() {
  const activeTab = document.querySelector('.search-tab.active');
  const tabPurpose = activeTab ? activeTab.getAttribute('data-purpose') : 'todos';

  const type = document.getElementById('heroType').value;
  const location = document.getElementById('heroLocation').value;
  const price = document.getElementById('heroPrice').value;
  const minBedrooms = parseInt(document.getElementById('heroBedrooms').value, 10) || 0;

  let filtered = PROPERTIES_DATA.filter(prop => {
    if (tabPurpose !== 'todos' && prop.purpose !== tabPurpose) return false;
    if (type !== 'todos' && prop.type !== type) return false;

    if (location !== 'todos') {
      const matchNeigh = prop.neighborhood.toLowerCase().includes(location.toLowerCase());
      const matchCity = prop.city.toLowerCase().includes(location.toLowerCase());
      if (!matchNeigh && !matchCity) return false;
    }

    if (minBedrooms > 0 && prop.bedrooms < minBedrooms) return false;

    if (price === 'ate-100k' && prop.price > 100000) return false;
    if (price === '100k-500k' && (prop.price < 100000 || prop.price > 500000)) return false;
    if (price === '500k-1m' && (prop.price < 500000 || prop.price > 1000000)) return false;
    if (price === 'acima-1m' && prop.price < 1000000) return false;

    return true;
  });

  renderProperties(filtered);

  // Rolar suavemente para a seção de imóveis
  const imoveisSection = document.getElementById('imoveis');
  if (imoveisSection) {
    imoveisSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ==========================================================================
   3. Modal de Detalhes do Imóvel
   ========================================================================== */

function openModal(id) {
  const prop = PROPERTIES_DATA.find(p => p.id === id);
  if (!prop) return;

  const modal = document.getElementById('propertyModal');
  const modalImg = document.getElementById('modalImg');
  const modalCode = document.getElementById('modalCode');
  const modalLocation = document.getElementById('modalLocation');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const whatsBtn = document.getElementById('modalWhatsAppBtn');

  modalImg.src = prop.image;
  modalImg.alt = prop.title;
  modalCode.textContent = prop.code;
  modalLocation.textContent = `• ${prop.neighborhood}, ${prop.city} - ${prop.state}`;
  modalTitle.textContent = prop.title;
  modalPrice.textContent = prop.priceFormatted;
  modalDesc.textContent = prop.description;

  // Specs
  modalSpecs.innerHTML = `
    <span><strong>Área:</strong> ${prop.area} m²</span>
    ${prop.bedrooms > 0 ? `<span><strong>Quartos:</strong> ${prop.bedrooms} (1 Suíte)</span>` : ''}
    ${prop.parking > 0 ? `<span><strong>Vagas:</strong> ${prop.parking}</span>` : ''}
    ${prop.bathrooms > 0 ? `<span><strong>Banheiros:</strong> ${prop.bathrooms}</span>` : ''}
    <span><strong>IPTU:</strong> ${prop.iptu}</span>
    <span><strong>Condomínio:</strong> ${prop.condo}</span>
  `;

  // Lista de Destaques
  modalFeatures.innerHTML = prop.features.map(f => `
    <li style="display:flex; align-items:center; gap:8px;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      ${f}
    </li>
  `).join('');

  // Link WhatsApp com código e nome pré-preenchidos
  const encodedText = encodeURIComponent(`Olá Adalberto! Tenho interesse no imóvel ${prop.code} (${prop.title}) no valor de ${prop.priceFormatted}. Gostaria de mais informações.`);
  whatsBtn.href = `https://api.whatsapp.com/send?phone=${SITE_CONFIG.phoneClean}&text=${encodedText}`;

  modal.classList.add('active');
  document.body.classList.add('lock-scroll');
}

function closeModal() {
  const modal = document.getElementById('propertyModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('lock-scroll');
  }
}

// Fechar com ESC ou clique fora
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeDrawer();
  }
});

const propertyModalEl = document.getElementById('propertyModal');
if (propertyModalEl) {
  propertyModalEl.addEventListener('click', (e) => {
    if (e.target === propertyModalEl) closeModal();
  });
}

/* ==========================================================================
   4. Menu Mobile Drawer
   ========================================================================== */

const mobileToggle = document.getElementById('mobileToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.classList.add('lock-scroll');
  });
}

function closeDrawer() {
  if (mobileDrawer) mobileDrawer.classList.remove('active');
  if (drawerBackdrop) drawerBackdrop.classList.remove('active');
  document.body.classList.remove('lock-scroll');
}

/* ==========================================================================
   5. Simulador Habitacional
   ========================================================================== */

function initSimulator() {
  updateSim();
}

function updateSim() {
  const valRange = document.getElementById('simValRange');
  const downRange = document.getElementById('simDownRange');
  const yearsRange = document.getElementById('simYearsRange');

  if (!valRange || !downRange || !yearsRange) return;

  const propertyVal = parseFloat(valRange.value);
  const downPercent = parseFloat(downRange.value);
  const years = parseInt(yearsRange.value, 10);
  const months = years * 12;

  const downVal = propertyVal * (downPercent / 100);
  const financedVal = propertyVal - downVal;

  // Taxa de juros anual estimada: 9.99% a.a. (~0.797% ao mês)
  const monthlyRate = 0.00797;
  const amortization = financedVal / months;
  const initialInterest = financedVal * monthlyRate;
  const initialInstallment = amortization + initialInterest;
  const recommendedIncome = initialInstallment * 3.3;

  // Atualizar displays
  document.getElementById('simValDisplay').textContent = formatCurrency(propertyVal);
  document.getElementById('simDownDisplay').textContent = `${formatCurrency(downVal)} (${downPercent}%)`;
  document.getElementById('simYearsDisplay').textContent = `${years} anos (${months} meses)`;

  document.getElementById('simFinancedDisplay').textContent = formatCurrency(financedVal);
  document.getElementById('simInstallmentDisplay').textContent = formatCurrency(initialInstallment);
  document.getElementById('simIncomeDisplay').textContent = formatCurrency(recommendedIncome);
}

function formatCurrency(val) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
}

/* ==========================================================================
   6. FAQ Accordion
   ========================================================================== */

function toggleFaq(header) {
  const item = header.parentElement;
  item.classList.toggle('open');
}

/* ==========================================================================
   7. Scroll Reveal & Scroll Spy
   ========================================================================== */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initScrollSpy() {
  const header = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');

  window.addEventListener('scroll', () => {
    // Sombra do header ao rolar
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   8. Formulário de Proprietários
   ========================================================================== */

function submitOwnerLead() {
  const name = document.getElementById('ownerName').value;
  const phone = document.getElementById('ownerPhone').value;
  const purpose = document.getElementById('ownerPurpose').value;
  const type = document.getElementById('ownerType').value;
  const location = document.getElementById('ownerLocation').value;

  const text = encodeURIComponent(
    `Olá Adalberto! Me chamo ${name} e gostaria de cadastrar meu imóvel para ${purpose}.\n` +
    `Tipo: ${type}\n` +
    `Localização: ${location}\n` +
    `Meu WhatsApp: ${phone}`
  );

  window.open(`https://api.whatsapp.com/send?phone=${SITE_CONFIG.phoneClean}&text=${text}`, '_blank');
  alert('Obrigado! Estamos abrindo o WhatsApp com as informações do seu imóvel para atendimento prioritário.');
}

/**
 * Berater Impex - Projects Interactive Filtering & Details Modal System
 */

const projectsData = [
  {
    id: 'capital-smart-city',
    title: 'Capital Smart City',
    category: 'residential',
    status: 'Available',
    statusClass: 'badge-available',
    location: 'M-2 Motorway, Islamabad',
    plotSizes: ['4 Marla', '5 Marla', '6 Marla', '8 Marla'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC65Y8yaNZsn0My8h3TvxyWQNf-lApBjbmBLxdAVf9_g_lW0psxlXzCcr64B1ItLCjD3gNTmhDjcxStDHrI2l5iGIDMjinnUNvfFnHG6-mEzVN31s-IkjZxhaOv_a2RgcwyCoxmlKPEEuW12W2C0pupKV0EfSlXj27jii4lvSEWXrEOruGEASBD0mgfgqMTc2Qo59wJMFmk-kE2y2fvpGt6GLZnO2sYO-JBuiabVclyymD4A0DB684j2w',
    description: 'Pakistan’s first smart city featuring state-of-the-art automated infrastructure, dedicated interchange on M-2 Motorway, PGA standard 18-hole golf course, and silicon valley standard tech district.',
    nocStatus: '100% Approved by RDA & CDA',
    features: ['Dedicated M-2 Interchange', 'Automated Utility Grid', 'PGA Standard Golf Course', 'Smart Traffic Management', 'BRT Transportation System']
  },
  {
    id: 'blue-world-city',
    title: 'Blue World City',
    category: 'commercial',
    status: 'Fast Selling',
    statusClass: 'badge-fast-selling',
    location: 'Chakri Road, Islamabad',
    plotSizes: ['5 Marla', '8 Marla', '10 Marla', 'Commercial'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaGfJdnpewvbuv7Y3Ba1eGJBOmkd_vw0elQx4eleC8Ut4mGhcUefbMJ77TqHfS0JUBXu67tn5qi_iimNr9-AoxvB4eztJ2ap-vYK8wNl38liOYznzF5A9kMjc0okYLfwGwzWyrnTP4wVgNqA5x_GgXeDa7BMvfMZj29Kth7cWtP3YsPkDq2Ly4MI5KA4xMwqYE2z0JX7s-C4EHjbXC6yWjKCNEyrmoVp88G9lo3KcNQt6FOVe0s1MdUQ',
    description: 'A landmark tourist-friendly development project with world-class monuments, cultural theme parks, premium commercial plazas, and rapid connection to Rawalpindi Ring Road.',
    nocStatus: 'Approved & Fully Verified',
    features: ['Water Theme Park', 'Burj Al Arab Replica', 'Rupali Cultural Avenue', 'Direct Access from Ring Road', 'Underground Electrification']
  },
  {
    id: 'park-view-city',
    title: 'Park View City',
    category: 'residential',
    status: 'Available',
    statusClass: 'badge-available',
    location: 'Zone IV, Islamabad',
    plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB_cIp_0PL1OqdEalSdWIv9Rds5JE768Hnqfs3_rHPlSGrJC19nQjXkuKhUdY6xv81jd5r9ATmu2hodwo3QVpQu0d63hfZy9hcpriVcYYgQnypZ4CenWbI1wv_S7QsvNR68CEWGo90ie__XD-KmZG3GkrxJk_gwceUQ8kukkXU_k-FzrTr5mdHYFLADTl16rxGZ6rrmrngv9PSotMqKfSTuDRecDP3O-TH01Db0fzzB_oWhhGA8VHJDw',
    description: 'Nestled directly in the botanical greenery of Margalla Hills with scenic mountain views, Downtown commercial hub, dancing fountains, and direct access via Malot Road.',
    nocStatus: 'CDA Approved NOC',
    features: ['Margalla Views', 'Downtown Commercial', 'Dancing Fountains', '200-ft Main Boulevard', 'Gated 24/7 Security']
  },
  {
    id: 'rudn-enclave',
    title: 'Rudn Enclave',
    category: 'residential',
    status: 'Pre-Launch',
    statusClass: 'badge-pre-launch',
    location: 'Adiala Road, Rawalpindi',
    plotSizes: ['5 Marla', '6 Marla', '8 Marla', '10 Marla'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6poJnk63-3ClfZ73kbqGv_ePddDdArk1g7Amb6ALN7rMCY15Tos-jk-ZGGhkAWOU0QgtravANALjsuzi5adTOXZV_VZRPjGfqHrhipGqo-Ypmc3ZPt6QjcEnHjCK6rRD_oU0z8cnswVJ5bDxEFUK33nsxDvNAjI-SNg51tNtjC4heRnAfh8LvNNpIcABai1rG27mR7UUuu28OnwZAbihiSrvVhKw8HFqUWxcJPqQjeeHUFft_45ZZDg',
    description: 'A master-planned luxury development overlooking the natural Khasala Dam, designed by NESPAK, offering serene lake-view residential living and premium commercial districts.',
    nocStatus: 'Master Plan Approved by NESPAK',
    features: ['Khasala Dam Waterfront', 'NESPAK Architectural Design', 'Direct Ring Road Link', 'International Standard Health Complex', 'Executive Golf Club']
  },
  {
    id: 'faisal-town-phase-2',
    title: 'Faisal Town Phase 2',
    category: 'residential',
    status: 'Available',
    statusClass: 'badge-available',
    location: 'Thalian Interchange, Islamabad',
    plotSizes: ['5 Marla', '8 Marla', '10 Marla', '1 Kanal', '2 Kanal'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7q16To47lAQcRi3ADdRrwgt5dtNgmb3PVhw2DV0nVioLlFQ03l4vzlD28pdDJOmVCex1oUbwyzi5el0JwRVfFxhJpIMd8cFA5CU8uKZOUpAV39wn4UX166lArVScn5ZLQpdlOph0yB78921-KtXtPzJHpjJzIbFWNPPtJaB0cFk5QPasHKw9447re35bxp1CAXRag4M5GBPhulKPIombS3u28zVX1adQmXwe4YLxielJnzkfUJslmA',
    description: 'Chaudhry Abdul Majeed’s signature mega-project positioned next to Thalian Interchange on M-2 Motorway with wide avenues, lush parks, and fast-paced infrastructure delivery.',
    nocStatus: 'Fully Approved & Verified',
    features: ['Grand Entrance Boulevards', 'Fast Possession Track', 'Underground Utilities', 'Central Commercial Hub', 'Educational Enclaves']
  },
  {
    id: 'silver-city',
    title: 'Silver City',
    category: 'residential',
    status: 'Available',
    statusClass: 'badge-available',
    location: 'Girja Road, Rawalpindi',
    plotSizes: ['4 Marla', '5 Marla', '6 Marla', '7 Marla', '10 Marla'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlnF8T6FP9t00I-mf2tgHxFp5YY4WhH5YBcPxqH2BRRzZtGtum2rvf4z-83xcBB3Z7yUFxOg8epAcvNPRYKu93ahux1NPvdqrC5hWIdFwhe0EKmMK4lyLrOhP1rBoFC8Qx7O0pfD9eN9zcwCTmVwGQ3EaY3kfaap88_tyx8nov9uDi2DiTPeRQJRjY_dD2laJ1tZoBi_HlxjuTqEsjWP84iyziqmtJesBgFpAZDPTxlTJwfYJo3Ue5HA',
    description: 'An eco-friendly residential scheme situated near New Islamabad International Airport, offering seamless connectivity, affordable luxury, and rapid development progression.',
    nocStatus: 'RDA Approved Masterplan',
    features: ['10 Mins from Islamabad Airport', 'Modern Security System', 'Eco-friendly Green Belts', 'Community Club House', 'Solar Powered Street Lights']
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilter();
  initProjectModal();
});

function initProjectFilter() {
  const filterButtons = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('[data-project-card]');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-project-filter');

      projectCards.forEach((card, index) => {
        const category = card.getAttribute('data-category');
        const status = card.getAttribute('data-status');

        let isMatch = false;
        if (filterValue === 'all') isMatch = true;
        else if (filterValue === category) isMatch = true;
        else if (filterValue === status) isMatch = true;

        if (isMatch) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 60);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initProjectModal() {
  const modal = document.getElementById('projectDetailModal');
  const closeBtn = document.getElementById('closeProjectModal');
  const modalBody = document.getElementById('projectModalContent');
  const detailButtons = document.querySelectorAll('[data-project-id]');

  if (!modal || !modalBody) return;

  function openProject(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project) return;

    modalBody.innerHTML = `
      <div class="relative h-72 md:h-80 w-full overflow-hidden">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 text-white">
          <span class="badge-status ${project.statusClass} inline-block mb-2 relative top-0 right-0">${project.status}</span>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-1">${project.title}</h2>
          <p class="flex items-center gap-1 text-white/90 text-sm">
            <span class="material-symbols-outlined text-sm">location_on</span> ${project.location}
          </p>
        </div>
      </div>
      <div class="p-6 md:p-8 space-y-6">
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-outline mb-2">Project Overview</h4>
          <p class="text-body-md text-on-surface-variant">${project.description}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface-container-low p-4 rounded-lg border border-outline-variant/30">
          <div>
            <span class="text-xs font-semibold uppercase text-outline block mb-1">NOC & Legal Status</span>
            <span class="text-sm font-bold text-primary flex items-center gap-1">
              <span class="material-symbols-outlined text-sm text-secondary">verified</span>
              ${project.nocStatus}
            </span>
          </div>
          <div>
            <span class="text-xs font-semibold uppercase text-outline block mb-1">Location Jurisdiction</span>
            <span class="text-sm font-bold text-on-surface">${project.location}</span>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-outline mb-3">Available Plot Dimensions</h4>
          <div class="flex flex-wrap gap-2">
            ${project.plotSizes.map(size => `<span class="chip-tag font-semibold text-primary px-3 py-1.5">${size}</span>`).join('')}
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-outline mb-3">Key Development Highlights</h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-on-surface-variant">
            ${project.features.map(f => `
              <li class="flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary text-sm">check_circle</span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row gap-3">
          <a href="contact.html?project=${encodeURIComponent(project.title)}" class="btn btn-gold flex-1 text-center font-bold">
            <span class="material-symbols-outlined text-sm">send</span> Book Plot / Inquire Now
          </a>
          <a href="https://wa.me/923218555599?text=${encodeURIComponent('Hello Berater Impex, I am interested in ' + project.title)}" target="_blank" class="btn btn-outline-primary flex-1 text-center font-bold">
            <span class="material-symbols-outlined text-sm">chat</span> WhatsApp Consult
          </a>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openProject(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

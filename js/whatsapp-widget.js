/**
 * Berater Impex - Animated & Interactive WhatsApp Pop-Up Widget
 * Replaces static floating button with dynamic pulse waves, auto-teaser bubble,
 * and an interactive WhatsApp chat dialog with quick-inquiry chips.
 */

(function () {
  const PHONE_NUMBER = '923218555599';
  const DEFAULT_MESSAGE = 'Hello Berater Impex, I would like to inquire about plots and development projects in Islamabad.';

  function initWhatsAppWidget() {
    // Prevent duplicate initialization
    if (document.getElementById('beraterWhatsAppWidget')) return;

    // Check if an existing static whatsapp-fab exists and remove it to upgrade
    const existingFabs = document.querySelectorAll('.whatsapp-fab');
    existingFabs.forEach(fab => {
      // Check if it's already inside a widget
      if (!fab.closest('#beraterWhatsAppWidget')) {
        fab.remove();
      }
    });

    // Create Widget DOM structure
    const widget = document.createElement('div');
    widget.id = 'beraterWhatsAppWidget';
    widget.className = 'whatsapp-widget-root';
    widget.innerHTML = `
      <!-- Teaser Speech Bubble (Pops up automatically) -->
      <div id="waTeaserBubble" class="wa-teaser-bubble" role="dialog" aria-label="WhatsApp quick inquiry">
        <button id="waTeaserClose" class="wa-teaser-close" aria-label="Close notification">&times;</button>
        <div class="wa-teaser-content" id="waTeaserTrigger">
          <div class="wa-teaser-header">
            <span class="wa-status-dot"></span>
            <strong>Berater Impex Advisory</strong>
          </div>
          <p class="wa-teaser-text">Have questions about plots in Islamabad? Chat with us live on WhatsApp!</p>
          <span class="wa-teaser-cta">Click to chat &rarr;</span>
        </div>
      </div>

      <!-- Interactive WhatsApp Chat Card -->
      <div id="waChatCard" class="wa-chat-card" role="dialog" aria-modal="true" aria-hidden="true">
        <!-- Header -->
        <div class="wa-card-header">
          <div class="wa-avatar-wrap">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIqD6-6MkO7gfT57uVqvOf25FYanPmzEwdrRfjNN9j1fccgQHaCA9swRwS19jmoCaKXF52CJjsomFPeoSP829o21tfgdvNKBtXxqdQx8h3NzxUdv_FtMX0aaMchy0ENUPMhLdKC6Y9e-hNaZDT5iMMYz2AqDavm50Qm5u6lTFp3KRjd4YiRJYIIpbTwI0BWQhGWibuEJx1Vo8tfeaOerHiOwLqA5tfG4sCMpAsZg28k_5uQIPTtp8IkbbOb0fDp3sY6Cw" alt="Berater Impex" class="wa-avatar-img" />
            <span class="wa-avatar-online" title="Online now"></span>
          </div>
          <div class="wa-header-info">
            <h4 class="wa-header-title">Berater Impex</h4>
            <p class="wa-header-status">
              <span class="wa-status-beacon"></span>
              Online | Property Desk
            </p>
          </div>
          <button id="waCardClose" class="wa-card-close-btn" aria-label="Close WhatsApp chat">&times;</button>
        </div>

        <!-- Chat Conversation Area -->
        <div class="wa-card-body">
          <div class="wa-message-bubble">
            <div class="wa-message-sender">Advisory Consultant</div>
            <div class="wa-message-text">
              Assalam-o-Alaikum! 👋 Welcome to <strong>Berater Impex</strong>.
              How can we assist you today with premium residential & commercial plots in Islamabad?
            </div>
            <div class="wa-message-time">
              Just now
              <svg class="wa-check-svg" viewBox="0 0 16 15" width="14" height="13">
                <path fill="#4fc3f7" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"/>
              </svg>
            </div>
          </div>

          <!-- Quick Option Chips -->
          <div class="wa-chips-label">Frequently Asked Topics:</div>
          <div class="wa-chips-container">
            <button class="wa-chip" data-query="Hello, I would like to inquire about Capital Smart City available plots and prices.">
              🏡 Capital Smart City
            </button>
            <button class="wa-chip" data-query="Hello, please provide details on Park View City residential plots and Margalla Hills views.">
              ⛰️ Park View City
            </button>
            <button class="wa-chip" data-query="Hello, I want details regarding Sector D-12 & Blue Area commercial opportunities.">
              🏢 Commercial & D-12
            </button>
            <button class="wa-chip" data-query="Hello, can you verify the CDA / RDA NOC approval status of your projects?">
              📜 NOC & Legal Status
            </button>
            <button class="wa-chip" data-query="Hello, I would like to schedule a site visit with an advisor.">
              🚗 Book Site Visit
            </button>
          </div>
        </div>

        <!-- Footer Input & Action -->
        <div class="wa-card-footer">
          <div class="wa-input-row">
            <input type="text" id="waCustomMessage" class="wa-custom-input" placeholder="Type your inquiry..." aria-label="Type your message" />
            <button id="waSendBtn" class="wa-send-btn" aria-label="Send WhatsApp message" title="Start Chat on WhatsApp">
              <svg viewBox="0 0 24 24" class="wa-send-icon">
                <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
          <a id="waDirectStartLink" href="https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}" target="_blank" rel="noopener noreferrer" class="wa-direct-btn">
            <svg class="wa-btn-svg" viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.029-.481-1.334-.555-2.203-1.89-2.27-1.978-.067-.089-.544-.725-.544-1.385 0-.66.347-.986.47-.118.123-.133.27-.166.36-.166.09 0 .18 0 .258.005.083.004.195-.032.304.23.113.27.387.946.421 1.015.034.07.057.151.011.242-.045.09-.068.147-.135.225-.068.079-.142.176-.203.236-.068.068-.139.142-.06.278.079.135.35 0.578.75 0.935.515.46 0.95.602 1.085.67.135.068.214.057.293-.034.079-.09.338-.393.428-.528.09-.135.18-.113.304-.068.124.045.787.371.922.439.135.068.225.101.258.158.034.056.034.326-.11.731z"/>
            </svg>
            <span>Open in WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Floating Trigger Button with Pulse Radar Waves & Notification Badge -->
      <button id="waTriggerBtn" class="wa-trigger-btn" aria-label="Open WhatsApp chat window" aria-expanded="false">
        <span class="wa-radar-ring wa-radar-1"></span>
        <span class="wa-radar-ring wa-radar-2"></span>
        <span class="wa-badge" aria-label="1 new message">1</span>
        <svg class="wa-icon-svg" viewBox="0 0 24 24" width="34" height="34">
          <path fill="#ffffff" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.073-2.029-.481-1.334-.555-2.203-1.89-2.27-1.978-.067-.089-.544-.725-.544-1.385 0-.66.347-.986.47-.118.123-.133.27-.166.36-.166.09 0 .18 0 .258.005.083.004.195-.032.304.23.113.27.387.946.421 1.015.034.07.057.151.011.242-.045.09-.068.147-.135.225-.068.079-.142.176-.203.236-.068.068-.139.142-.06.278.079.135.35 0.578.75 0.935.515.46 0.95.602 1.085.67.135.068.214.057.293-.034.079-.09.338-.393.428-.528.09-.135.18-.113.304-.068.124.045.787.371.922.439.135.068.225.101.258.158.034.056.034.326-.11.731z"/>
        </svg>
      </button>
    `;

    document.body.appendChild(widget);

    // Bind Interactions
    const triggerBtn = document.getElementById('waTriggerBtn');
    const chatCard = document.getElementById('waChatCard');
    const cardCloseBtn = document.getElementById('waCardClose');
    const teaserBubble = document.getElementById('waTeaserBubble');
    const teaserCloseBtn = document.getElementById('waTeaserClose');
    const teaserTrigger = document.getElementById('waTeaserTrigger');
    const customInput = document.getElementById('waCustomMessage');
    const sendBtn = document.getElementById('waSendBtn');
    const chipBtns = widget.querySelectorAll('.wa-chip');

    let isCardOpen = false;

    function openCard() {
      isCardOpen = true;
      chatCard.classList.add('active');
      chatCard.setAttribute('aria-hidden', 'false');
      triggerBtn.setAttribute('aria-expanded', 'true');
      triggerBtn.classList.add('open');
      // Hide teaser bubble when card opens
      if (teaserBubble) teaserBubble.classList.remove('active');
      setTimeout(() => {
        if (customInput) customInput.focus();
      }, 250);
    }

    function closeCard() {
      isCardOpen = false;
      chatCard.classList.remove('active');
      chatCard.setAttribute('aria-hidden', 'true');
      triggerBtn.setAttribute('aria-expanded', 'false');
      triggerBtn.classList.remove('open');
    }

    function toggleCard() {
      if (isCardOpen) {
        closeCard();
      } else {
        openCard();
      }
    }

    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCard();
    });

    cardCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeCard();
    });

    if (teaserCloseBtn) {
      teaserCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        teaserBubble.classList.remove('active');
        sessionStorage.setItem('berater_wa_teaser_dismissed', '1');
      });
    }

    if (teaserTrigger) {
      teaserTrigger.addEventListener('click', () => {
        openCard();
      });
    }

    // Launch WhatsApp with given text
    function launchWhatsApp(text) {
      const message = text && text.trim() ? text.trim() : DEFAULT_MESSAGE;
      const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      closeCard();
    }

    // Handle Quick Inquiry Chips
    chipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query');
        launchWhatsApp(query);
      });
    });

    // Handle Custom Input Send
    function handleCustomSend() {
      const val = customInput ? customInput.value.trim() : '';
      launchWhatsApp(val || DEFAULT_MESSAGE);
      if (customInput) customInput.value = '';
    }

    if (sendBtn) {
      sendBtn.addEventListener('click', handleCustomSend);
    }

    if (customInput) {
      customInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleCustomSend();
        }
      });
    }

    // Close when clicking outside of widget
    document.addEventListener('click', (e) => {
      if (isCardOpen && !widget.contains(e.target)) {
        closeCard();
      }
    });

    // Pop up teaser bubble after 2.2 seconds if not dismissed previously
    setTimeout(() => {
      if (!isCardOpen && !sessionStorage.getItem('berater_wa_teaser_dismissed')) {
        if (teaserBubble) teaserBubble.classList.add('active');
      }
    }, 2200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsAppWidget);
  } else {
    initWhatsAppWidget();
  }
})();

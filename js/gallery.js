/**
 * Berater Impex - Gallery Filter & Fullscreen Lightbox Modal System
 */

const galleryItems = [
  {
    id: 1,
    title: 'Main Boulevard Completion',
    subtitle: 'Phase 1 Infrastructure',
    category: 'infrastructure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLlzvT6t6caGGw99FzsCIKPht0kbIUyJefjzD6HDFlgivcXNdMtK6Y6FASP3aAD3lHak868bevnBSKBdr6PxZArrnSvr_PbmPDdsm9HFdLHobhPBRNMLDc7_-rMiNfrrqbnCrknD96NMCEJfgLBehGkfF5COZkgjHA3XN9NXcXwfUqZ6GZopOZquPnx7OqwHl3UQFlmqmRrZWWjsrc6jV6nj4UA0jddMFfkd3jezJrHoZuIvbeQ0JuCA',
    description: 'Wide-angle aerial view of the finished dual carriageway boulevard with paved lanes and streetlighting.'
  },
  {
    id: 2,
    title: 'Utility Networks & Grid',
    subtitle: 'Underground Wiring Complete',
    category: 'infrastructure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-DvylJDHRzNk1VvmT4iPpK6t0ltK_T3Hk3MQNM7006UifHOnFpqCJkDXLccpSo5PIInsTUdHMf4g1hZuSMTfo_l3fXNlABqzYklQmoI6rESN1IuYztC_USwqPTF_5vpCMq66I6HOEJZm6auSR2RLcOIqKdTN0Kb60lANKrzHoWgIvngYFY27vq7B5HM4k0bhJNFeqsFXtAqrnBCZz0x8kHxmli7W0-9AtITBcO4AdaoZFZWJxD2xC0g',
    description: 'Subterranean utilities, stormwater drainage conduits and high-capacity electrical distribution boxes.'
  },
  {
    id: 3,
    title: 'Central Park Landscaping',
    subtitle: 'Sector B Amenities',
    category: 'landscaping',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx7neTuFHHM0Kn3tDU--bIBkm8swD1FLuaZbJrYzFWb5sD7LDIfenqTBL7Pl1qDGBNq4uMlE_9dzy6EP8d5lK2fc8gcuxLF7W1L78JXzqU4UU3dsigq-ZmT0djmbKjnMLTZtJzP4a3m88i9zo1pQIVG5Vgalxqyso8KXiIXoexCgokauH9CSczqWXhflYaU2QF0LRBvZPxCDFLrRpjfnD75uMCQWjRoRHQbqc1S4ucyWHs9ADdcXE6CA',
    description: 'Verdant green lawns, jogging tracks, planted flora and family recreational zones.'
  },
  {
    id: 4,
    title: 'Terrace Structuring & Grading',
    subtitle: 'Hillside Plot Preparation',
    category: 'infrastructure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1xq8xs-b0W9XvWAAP5pYbzpLRpfJmXrVp88nYXdSd1i-3mpoFm_QUkFMHAqyRXTZhYVi7R21vguLpqX348ub0490owiy0Fx-d8TwlF82HM0vFgoowZjQmkiJDcbQXKE1OiagGpFBhLcciCiMkmYG2W11SP-ZVbr-GArADM9QLoNhyavpDiLhP0lA7V0gdEDT6MsbDqJX5-c41ksqk4mCp7PfvY3KdFTX2WIKkprPok0T3Hsx_tQAGg',
    description: 'Precision earthwork and reinforced concrete retaining walls stabilizing scenic hillside sectors.'
  },
  {
    id: 5,
    title: 'Scheme Entrance Gates',
    subtitle: 'Sector A Completed',
    category: 'completed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN0RpzffNwdvg6CDVSm3v1NHs2M3s3_uoJFRXCI3-f-gzbKSrHzS4VqSnSDFFxBE-2mP5RC3XcQZCPxCHm9GssRqoOj0cWr9UCypXvrmYSf66HFxUlftPvfa-slplmPSVEF82SyOaRViLmCW16fbuIrt4aypXFlc4ismhUJgLXZUiFzg1v3AfypdBA-wUkNsN3kyQFrcRlSFIsQbIz53qs6mr6Ib-O7Wshn9_HrQNsWZveF-YoiO4ESQ',
    description: 'Monumental stone and steel gateway with multi-lane automated security barrier checkpoints.'
  },
  {
    id: 6,
    title: 'Plot Demarcation & Boundary Pegs',
    subtitle: 'Premium Lots Ready for Handover',
    category: 'completed',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRE-tNbL8FqueuJ4wIOmVSv7Ct_7Kz0VPwUoLpxKL6V4rtiASkw5VsNH0MHSpZjO38wWGk09w_2vRibDzBQgnXeZjcqdOKaNpVuH4tUN_s7zQxMHw7CdFFBrKQhv3idwdfplIAGNcw7LHZCPXz2t68hm3QSqmB5EBcfxHq2DX5Mosu7N2IYwEEQ6EW4ZZDPl2OSWKetM110DD2ZKsZCxpE8NDSCZaLlv1uAGNAAJcMN29pJTQP64LxtA',
    description: 'Laser-levelled residential parcels clearly pegged and prepared for building construction.'
  }
];

let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFilter();
  initLightbox();
});

function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('[data-gallery-filter]');
  const items = document.querySelectorAll('[data-gallery-item]');

  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-gallery-filter');

      items.forEach((item, index) => {
        const category = item.getAttribute('data-category');
        const isMatch = (filter === 'all' || filter === category);

        if (isMatch) {
          item.style.display = '';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, index * 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxSubtitle = document.getElementById('lightboxSubtitle');
  const closeBtn = document.getElementById('closeLightbox');
  const prevBtn = document.getElementById('prevLightbox');
  const nextBtn = document.getElementById('nextLightbox');
  const galleryItemElements = document.querySelectorAll('[data-gallery-index]');

  if (!lightbox || !lightboxImg) return;

  function showImage(index) {
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;

    currentLightboxIndex = index;
    const item = galleryItems[index];

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxSubtitle) lightboxSubtitle.textContent = item.subtitle;
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  galleryItemElements.forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.getAttribute('data-gallery-index'), 10);
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentLightboxIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentLightboxIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop-click')) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentLightboxIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentLightboxIndex + 1);
  });
}

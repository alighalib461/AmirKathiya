# Berater Impex - Real Estate Developer Portal

Official website for **Berater Impex**, a leading real estate developer and land acquisition advisory firm in Islamabad, Pakistan, founded by **Amir Kathiya**.

## 🌟 Features

- **Home Page**: Hero entrance animations, live counters (*20 Years Experience*, *147+ Projects Delivered*, *1000+ Satisfied Clients*), featured property highlights, and trust commitments.
- **Our Projects**: Filterable project portfolio (*Available, Fast Selling, Pre-Launch, Residential, Commercial*) with interactive detail modals and NOC compliance information.
- **About Us**: Executive leadership profile of Amir Kathiya, corporate mission, and a 4-step *Intiqal* & legal transfer process breakdown.
- **Gallery**: Masonry grid with category filtering (*Infrastructure, Landscaping, Completed Schemes*) and full-screen lightbox viewer with keyboard and arrow controls.
- **Contact Us**: Direct advisory channels, satellite map of Islamabad, and an investment inquiry form with instant toast notifications and WhatsApp integration.

## 🚀 Running Locally

```bash
# Start the local server
node server.js
```

Then navigate to `http://localhost:3000` in your web browser.

## 📂 Project Structure

```
├── index.html          # Home page
├── projects.html       # Our Projects portfolio
├── about.html          # About leadership & Intiqal process
├── gallery.html        # On-ground progress gallery & lightbox
├── contact.html        # Inquiries & direct contact channels
├── css/
│   └── main.css        # Material Design System & animation keyframes
├── js/
│   ├── animations.js   # IntersectionObserver scroll triggers
│   ├── main.js         # Mobile drawer menu & call modals
│   ├── projects.js     # Project data & interactive details modal
│   ├── gallery.js      # Masonry filters & fullscreen lightbox
│   └── contact.js      # Form validation & submission toast
├── server.js           # Lightweight HTTP local server
└── package.json        # Project configuration
```

© 2024 Berater Impex. All rights reserved.

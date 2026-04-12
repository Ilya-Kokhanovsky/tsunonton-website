"use strict";

const data = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  "name": "Tsunonton Privacy Policy",
  "url": "https://tsunonton.com/privacy.html",
  "dateModified": "2026-03-17",
  "publisher": {
    "@type": "Organization",
    "name": "Tsunonton Project",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tsunonton.com/static/img/logos/tsun-logo.png"
    }
  }
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(data);
document.head.appendChild(script);

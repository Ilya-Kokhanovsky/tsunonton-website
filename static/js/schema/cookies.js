"use strict";

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tsunonton.com/#organization",
      "name": "Tsunonton",
      "url": "https://tsunonton.com/",
      "logo": "https://tsunonton.com/static/img/favicon.ico",
      "sameAs": [
        "https://t.me/tsunonton",
        "https://t.me/tsunonton_bot",
        "https://t.me/tsunonton_chat",
        "https://x.com/tsunonton"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://tsunonton.com/cookies.html#webpage",
      "url": "https://tsunonton.com/cookies.html",
      "name": "Tsunonton Cookie Policy | TON GameFi Data & Storage 2026",
      "description": "Read the Tsunonton cookie policy for TON GameFi and Telegram use. We only store essential preferences for security and UX.",
      "isPartOf": {
        "@id": "https://tsunonton.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://tsunonton.com/static/img/mascot-image.webp"
      },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tsunonton.com/cookies.html#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tsunonton.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cookie Policy",
          "item": "https://tsunonton.com/cookies.html"
        }
      ]
    }
  ]
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(data);
document.head.appendChild(script);

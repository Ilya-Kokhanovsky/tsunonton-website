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
      "@id": "https://tsunonton.com/knowledge.html#webpage",
      "url": "https://tsunonton.com/knowledge.html",
      "name": "Tsunonton Knowledge Base | TON GameFi & Telegram Guide 2026",
      "description": "Learn TON basics, wallets, DEX swaps, and safe Telegram GameFi play in the Tsunonton Knowledge Base.",
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
      "@id": "https://tsunonton.com/knowledge.html#breadcrumb",
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
          "name": "Knowledge Base",
          "item": "https://tsunonton.com/knowledge.html"
        }
      ]
    }
  ]
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(data);
document.head.appendChild(script);

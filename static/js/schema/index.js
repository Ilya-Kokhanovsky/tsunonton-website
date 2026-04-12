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
      "@id": "https://tsunonton.com/#webpage",
      "url": "https://tsunonton.com/",
      "name": "Tsunonton Token | TON GameFi Anime Telegram Clicker 2026",
      "description": "Play Tsunonton ($TSUN), the TON GameFi anime clicker. Tap in Telegram, earn points, and join the community.",
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
      "@type": "SoftwareApplication",
      "@id": "https://tsunonton.com/#game",
      "name": "Tsunonton Telegram Clicker",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Android, iOS, Web",
      "url": "https://t.me/tsunonton_bot",
      "description": "A community-driven TON GameFi anime clicker. Tap in Telegram to collect in-game points (no monetary value) and join the Tsunonton community.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tsunonton.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tsunonton.com/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://tsunonton.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Tsun on TON?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tsun On TON ($TSUN) is an anime-themed GameFi and clicker project on the TON blockchain. By interacting with the Telegram bot, players can collect in-game points while joining the community. In-game points are separate from $TSUN and have no financial value."
          }
        },
        {
          "@type": "Question",
          "name": "Is $TSUN safe to buy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The contract is reported as renounced, liquidity is reported locked via TonRaffles, and the token has 0% tax. These are common safety signals, but $TSUN is still a meme token and all cryptocurrency carries risk."
          }
        },
        {
          "@type": "Question",
          "name": "Is the contract audited?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Community reports indicate the contract is renounced, and users can verify status on Tonviewer. Renounced contracts reduce admin control but do not eliminate risks like bugs, exploits, or market volatility."
          }
        },
        {
          "@type": "Question",
          "name": "Where is liquidity locked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Initial liquidity is reported locked using third-party lockers on the TON network via TonRaffles. Users should verify lock status on-chain, since liquidity locks reduce some risks but are not a guarantee against loss."
          }
        },
        {
          "@type": "Question",
          "name": "When does the clicker game launch and how do I qualify for the airdrop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The clicker mini-app is in active development during Phase 2. Launch is announced through @tsunonton_bot, and Phase 3 airdrop eligibility is based on leaderboard position during the clicker phase."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to hold $TSUN to play the clicker game?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The clicker game is open to everyone in Telegram, and players can earn in-game points without holding tokens. Holding $TSUN may be considered for bonus mechanics in later phases."
          }
        },
        {
          "@type": "Question",
          "name": "Can I earn real money from the game?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The game is for entertainment, and Tsun Points are not money and cannot currently be exchanged for $TSUN or any other asset. Any future airdrops are at the team's discretion."
          }
        },
        {
          "@type": "Question",
          "name": "Why a Tsundere anime theme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The project frames market behavior with tsundere anime culture, combining meme energy with anime-inspired GameFi aesthetics on TON."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I connect my wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Connecting a wallet through official TON Connect protocols can verify on-chain ownership for optional features, and the app cannot execute transactions without explicit wallet approval."
          }
        }
      ]
    }
  ]
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(data);
document.head.appendChild(script);

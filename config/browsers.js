export default {
  id: "browsers",
  title: "از یک مرورگر حریم‌شخصی-محور استفاده کنید",
  description: `باید از مرورگری استفاده کنید که از شما در برابر رهگیری آنلاین فعالیت‌ها و تبلیغات ناخواسته محافظت می‌کند.

  \n\nمرورگرهای امروزی، کار انتقال بوکمارک‌ها و تنظیمات به یک مرورگر جدید را راحت کرده‌اند.
    `,
  apps: [
    {
      name: "Firefox",
      image: "static/img/firefox.jpg",
      url: "https://www.mozilla.org/en-US/firefox/",
      sources: {
        windows: "https://www.mozilla.org/en-US/firefox/",
        macos: "https://www.mozilla.org/en-US/firefox/",
        ios: "https://www.mozilla.org/en-US/firefox/mobile/",
        android: "https://www.mozilla.org/en-US/firefox/mobile/",
        linux: "https://support.mozilla.org/en-US/kb/install-firefox-linux",
      },
    },
    {
      name: "Tor",
      image: "static/img/tor.png",
      url: "https://www.torproject.org/",
      sources: {
        windows:
          "https://www.torproject.org/download/download-easy.html#windows",
        macos: "https://www.torproject.org/download/download-easy.html#mac",
        linux: "https://www.torproject.org/download/download-easy.html#linux",
        android:
          "https://play.google.com/store/apps/details?id=org.torproject.torbrowser_alpha",
      },
    },
    {
      name: "Safari",
      image: "static/img/safari.jpg",
      url: "https://www.apple.com/safari/",
      sources: {
        macos: "https://www.apple.com/safari/",
        ios: "https://www.apple.com/safari/",
      },
    },
    {
      name: "Librewolf",
      image: "static/img/librewolf.png",
      url: "https://librewolf.net/",
      sources: {
        windows: "https://librewolf.net/installation/windows/",
        macos: "https://librewolf.net/installation/macos/",
        linux: "https://librewolf.net/installation/debian/",
      },
    },
    {
      name: "DuckDuckGo",
      image: "static/img/duckduckgo.jpg",
      url: "https://duckduckgo.com/app",
      sources: {
        ios: "https://apps.apple.com/app/duckduckgo-privacy-browser/id663592361",
        android:
          "https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android",
      },
    },
  ],
  resources: [
    {
      name: "Don’t expect privacy from Chrome",
      url: "https://www.digitaltrends.com/computing/google-chrome-incognito-mode-tracking/",
    },
    {
      name: "Google Chrome‘s users take a back seat to its bottom line",
      url: "https://www.eff.org/deeplinks/2018/11/google-chromes-users-take-back-seat-its-bottom-line",
    },
    {
      name: "What data of mine does Chrome send to Google?",
      url: "https://lifehacker.com/5763452/what-data-does-chrome-send-to-google-about-me",
    },
    {
      name: "Firefox multi-account containers",
      url: "https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/",
    },
    {
      name: "How to protect yourself from browser fingerprinting",
      url: "https://www.comparitech.com/blog/vpn-privacy/what-is-browser-fingerprinting-how-to-protect-yourself/",
    },
    {
      name: "Browser fingerprinting, and why they are so hard to erase",
      url: "https://www.networkworld.com/article/2884026/security0/browser-fingerprints-and-why-they-are-so-hard-to-erase.html",
    },
    {
      name: "Who Tracks Me - Learn about tracking technologies, market structure and data-sharing on the web.",
      url: "https://whotracks.me/",
    },
  ],
};

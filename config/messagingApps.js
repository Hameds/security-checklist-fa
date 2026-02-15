export default {
  id: "messagingApps",
  title: "انتقال اطلاعات حساس با پیام‌رسان‌های رمزگذاری شده",
  description: `وقتی اطلاعات حساسی را در چت به اشتراک می‌گذارید، باید از سرویسی امن استفاده کنید که رمزگذاری سرتاسری (End-to-end encryption) دارد.
 \n\nرمزگذاری سرتاسری اطمینان می‌دهد که فقط شما و گیرنده‌ مورد نظر شما قادر به مشاهده پیام‌ها هستند و پیام‌های شما برای هر کس دیگری، از جمله توسعه‌دهندگان یا صاحبان آن پیام‌رسان، شرکت‌های ارائه‌دهنده خدمات اینترنت قابل مشاهده نخواهد بود.  
  `,
  apps: [
    {
      name: "iMessage",
      image: "./static/img/imessage.png",
      url: "https://support.apple.com/explore/messages",
      sources: {
        macos: "https://support.apple.com/explore/messages",
        ios: "https://support.apple.com/explore/messages",
      },
    },
    {
      name: "WhatsApp",
      image: "./static/img/whatsapp.jpg",
      url: "https://www.whatsapp.com/",
      sources: {
        windows: "https://www.whatsapp.com/download",
        macos: "https://www.whatsapp.com/download",
        ios: "http://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8",
        android: "https://play.google.com/store/apps/details?id=com.whatsapp",
      },
    },
    {
      name: "Signal",
      image: "./static/img/signal.jpg",
      url: "https://www.signal.org/",
      sources: {
        windows: "https://www.signal.org/download/",
        macos: "https://www.signal.org/download/",
        ios: "https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8",
        android:
          "https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&referrer=utm_source%3DOWS%26utm_medium%3DWeb%26utm_campaign%3DNav",
        linux: "https://www.signal.org/download/",
      },
    },
    {
      name: "Session",
      image: "./static/img/session.png",
      url: "https://getsession.org/",
      sources: {
        windows: "https://getsession.org/windows",
        macos: "https://getsession.org/mac",
        ios: "https://getsession.org/iphone",
        android: "https://getsession.org/android",
        linux: "https://getsession.org/linux",
      },
    },
  ],
  resources: [
    {
      name: "What is end-to-end encryption?",
      url: "https://www.lifewire.com/what-is-end-to-end-encryption-4028873",
    },
    {
      name: "Hacker lexicon: end-to-end encryption",
      url: "https://www.wired.com/2014/11/hacker-lexicon-end-to-end-encryption/",
    },
    {
      name: "Encrypted messaging isn’t magic",
      url: "https://www.wired.com/story/encrypted-messaging-isnt-magic/",
    },
    {
      name: "Why you need a better handle on the WhatsApp, Signal and Telegram apps",
      url: "https://www.cnet.com/news/you-might-not-really-understand-how-encrypted-messaging-apps-work/",
    },
    {
      name: "The best and worst encrypted messaging apps",
      url: "https://gizmodo.com/the-best-and-worst-encrypted-messaging-apps-1782424449",
    },
  ],
};

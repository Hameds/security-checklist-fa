export default {
  id: "email",
  title: "از سرویس‌دهنده ایمیل حریم‌شخصی-محور استفاده کنید",
  description: `باید از سرویس‌دهنده ایمیلی استفاده کنید که ایمیل‌های شما را نمی‌خواند و هچنین مکالمات شما را برای نمایش تبلیغات هدفمند جمع‌آوری نمی‌کند.
    `,
  apps: [
    {
      name: "FastMail",
      image: "/static/img/fastmail.jpg",
      url: "https://www.fastmail.com/",
      sources: {
        windows: "https://www.fastmail.com/",
        macos: "https://www.fastmail.com/",
        ios:
          "https://itunes.apple.com/us/app/fastmail-email-calendar/id931370077",
        android:
          "https://play.google.com/store/apps/details?id=com.fastmail.app",
        linux: "https://www.fastmail.com/"
      }
    },
    {
      name: "ProtonMail",
      image: "/static/img/protonmail.jpg",
      url: "https://protonmail.com//",
      sources: {
        windows: "https://protonmail.com/",
        macos: "https://protonmail.com/",
        ios:
          "https://itunes.apple.com/app/protonmail-encrypted-email/id979659905",
        android:
          "https://play.google.com/store/apps/details?id=ch.protonmail.android",
        linux: "https://protonmail.com/"
      }
    },
    {
      name: "Tutanota",
      image: "/static/img/tutanota.jpg",
      url: "https://tutanota.com/",
      sources: {
        windows: "https://mail.tutanota.com/desktop/tutanota-desktop-win.exe",
        macos: "https://mail.tutanota.com/desktop/tutanota-desktop-mac.zip",
        ios: "https://itunes.apple.com/app/tutanota/id922429609",
        android:
          "https://play.google.com/store/apps/details?id=de.tutao.tutanota",
        linux:
          "https://mail.tutanota.com/desktop/tutanota-desktop-linux.AppImage"
      }
    },
    {
      name: "Burner Mail",
      image: "/static/img/burnermail.jpg",
      url: "https://burnermail.io/",
      sources: {
        windows: "https://burnermail.io/",
        macos: "https://burnermail.io/"
      }
    }
  ],
  resources: [
    {
      name: "Gmail vs FastMail",
      url: "https://hiverhq.com/blog/gmail-vs-fastmail-a-blunt-comparison/"
    },
    {
      name: "Stop the paranoia: it doesn’t matter if Google reads our email",
      url: "https://www.maxmasnick.com/2012/02/12/gmail_paranoia/"
    },
    {
      name: "How Google is destroying privacy and collecting your data",
      url:
        "https://www.salon.com/2014/02/05/4_ways_google_is_destroying_privacy_and_collecting_your_data_partner/"
    },
    {
      name: "Privacy-friendly alternatives to Google that don’t track you",
      url: "https://nomoregoogle.com/"
    },
    {
      name:
        "Opt out of global data surveillance programs like PRISM, XKeyscore and Tempora.",
      url: "https://prism-break.org/en/"
    },
    {
      name:
        "Knowledge and tools to protect your privacy against global mass surveillance",
      url: "https://www.privacytools.io/"
    }
  ]
};

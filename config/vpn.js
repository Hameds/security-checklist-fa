export default {
  id: "vpn",
  title: "از VPN استفاده کنید",
  description: `یک VPN یا شبکه خصوصی مجازی، ابزاری مفید برای امن کردن اتصال اینترنت است. VPN تضیمن می‌کند که اطلاعات ارسالی و دریافتی شما در اینترنت رمزگذاری شده و از شنود ترافیک اینترنت شما، جلوگیری می‌کند.

  \n\nباید از سرویس‌دهنده‌ VPN استفاده کنید که مطمئن هستید اطلاعات شما را برای فروش، جمع‌آوری نمی‌کند.
  بهترین VPN‌ها معمولاً اشتراک ماهیانه دارند. این چیز خوبی است چون به آن معنی است که مدل کسب درآمدشان بر مبنای فروش اطلاعات به تبلیغ‌کننده‌ها نیست.
  \n\nظاهراً طبق قوانین ایران، استفاده از VPN جرم نیست اما خرید و فروش آن جرم است. این مساله نیاز به بررسی بیشتر دارد اما در هر حال VPNهایی که از طریق شبکه شتاب و با پرداخت الکترونیک شارژ می‌شوند، با توجه به ممنوعیت قانونی، امن نیستند. 
    `,
  apps: [
    {
      name: "NordVPN",
      image: "static/img/nordvpn.jpg",
      url: "https://nordvpn.com/",
      sources: {
        windows: "https://nordvpn.com/download/windows/",
        macos: "https://nordvpn.com/download/mac/",
        ios: "https://nordvpn.com/download/ios/",
        android: "https://nordvpn.com/download/android/",
        linux: "https://nordvpn.com/tutorials/linux/",
      },
    },
    {
      name: "ExpressVPN",
      image: "static/img/expressvpn.jpg",
      url: "https://www.expressvpn.com/",

      sources: {
        windows: "https://www.expressvpn.com/vpn-software/vpn-windows",
        macos: "https://www.expressvpn.com/vpn-software/vpn-mac",
        ios: "https://www.expressvpn.com/vpn-software/vpn-ios",
        android: "https://www.expressvpn.com/vpn-software/vpn-android",
        linux:
          "https://www.expressvpn.com/support/vpn-setup/manual-config-for-linux-with-openvpn/",
      },
    },
    {
      name: "ProtonVPN",
      image: "static/img/protonvpn.jpg",
      url: "https://www.protonvpn.com/",
      sources: {
        windows: "https://protonvpn.com/download/",
        macos: "https://protonvpn.com/download/",
        ios: "https://itunes.apple.com/us/app/protonvpn-fast-secure-vpn/id1437005085",
        android:
          "https://play.google.com/store/apps/details?id=com.protonvpn.android",
        linux: "https://protonvpn.com/download/#dl-clients",
      },
    },
    {
      name: "Mullvad VPN",
      image: "static/img/mullvand.png",
      url: "https://mullvad.net/",
      sources: {
        windows: "https://mullvad.net/download/app/exe/latest/",
        macos: "https://mullvad.net/download/app/pkg/latest/",
        ios: "https://apps.apple.com/app/mullvad-vpn/id1488466513",
        android:
          "https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn",
        linux: "https://mullvad.net/en/download/linux/",
      },
    },
    {
      name: "IVPN",
      image: "static/img/ivpn.jpg",
      url: "https://www.ivpn.net/",
      sources: {
        windows: "https://www.ivpn.net/apps-windows",
        macos: "https://www.ivpn.net/apps-macos",
        ios: "https://www.ivpn.net/apps-ios",
        android: "https://www.ivpn.net/apps-android",
        linux: "https://www.ivpn.net/setup/gnu-linux-terminal.html",
      },
    },
    {
      name: "Encrypt.me",
      image: "static/img/encrypt-me.jpg",
      url: "https://encrypt.me/",
      sources: {
        windows: "https://app.encrypt.me/transition/download/windows/latest/",
        macos: "https://app.encrypt.me/transition/download/osx/latest/",
        ios: "https://itunes.apple.com/us/app/encrypt-me/id473835722?ls=1&mt=8",
        android:
          "https://play.google.com/store/apps/details?id=com.stackpath.cloak",
      },
    },
    {
      name: "Private Internet Access",
      image: "static/img/privateinternetaccess.jpg",
      url: "https://www.privateinternetaccess.com/",
      sources: {
        windows:
          "https://www.privateinternetaccess.com/installer/x/download_installer_win/64",
        macos:
          "https://www.privateinternetaccess.com/installer/x/download_installer_osx",
        ios: "https://itunes.apple.com/us/app/private-internet-access-anonymous/id955626407?mt=8&uo=6&at=1001l3Gx&ct=web",
        android:
          "https://play.google.com/store/apps/details?id=com.privateinternetaccess.android&hl=en",
        linux:
          "https://www.privateinternetaccess.com/installer/x/download_installer_linux",
      },
    },
    {
      name: "Guardian Firewall",
      image: "static/img/guardian.png",
      url: "https://guardianapp.com",
      sources: {
        ios: "https://itunes.apple.com/us/app/guardian-firewall/id1363796315",
      },
    },
  ],
  resources: [
    {
      name: "Why you should be using a VPN",
      url: "https://lifehacker.com/5940565/why-you-should-start-using-a-vpn-and-how-to-choose-the-best-one-for-your-needs",
    },
    {
      name: "What is a VPN and why you need one",
      url: "https://www.pcmag.com/article/352757/you-need-a-vpn-and-heres-why",
    },
    {
      name: "Why you should use a VPN on a public Wi-Fi network",
      url: "https://www.macworld.com/article/3322951/security/why-you-should-use-a-vpn-on-a-public-wi-fi-network.html",
    },
    {
      name: "A detailed VPN provider comparison chart",
      url: "https://thatoneprivacysite.net/vpn-comparison-chart/",
    },
  ],
};

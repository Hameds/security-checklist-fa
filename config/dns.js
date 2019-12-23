export default {
  id: "dns",
  title: "تنظیمات DNS را به 1.1.1.1 یا 9.9.9.9 تغییر دهید",
  description: `در واقع DNS ها معادل اینترنتی دفترچه تلفن‌ها هستند. 

\n\n  DNS اسمی مثل 'google.com' را به آدرس IP تبدیل می‌کند. به صورت پیش‌فرض، DNS کند و ناامن است. خیلی از شرکت‌های ارائه‌دهنده اینترنت (ISP) اطلاعات فعالیت‌های اینترنتی شما را از طریق DNS رهگیری و ذخیره می‌کنند و حتی در بعضی موارد این اطلاعات را به تبلیغ‌کنندها می‌فروشند.

  \n\nسایت Cloudflare یک ابزار کارا و حریم‌خصوصی-محور برای DNS ارائه داده که ترافیک اینترنت شما را در برابر شرکت‌های ارائه‌دهنده خدمات اینترنت و افرادی که WiFi های عمومی را شنود می‌کنند محافظت می‌کند.
   1.1.1.1 از سرویس‌های DNS معمول سریع‌تر هم هست و باعث افزایش سرعت وب‌گردی شما می‌شود.
  \n\nیک جایگزین برای سرویس Cloudflare سرویس Quad9 است که روی امنیت و حریم شخصی وب‌گردی روزانه شما تاکید دارد. 
    `,
  apps: [
    {
      name: "1.1.1.1",
      image: "/static/img/1111.jpg",
      url: "https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/",
      sources: {
        windows: "https://one.one.one.one/",
        macos: "https://one.one.one.one/",
        ios:
          "https://itunes.apple.com/app/1-1-1-1-faster-internet/id1423538627?mt=8",
        android:
          "https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone",
        linux: "https://one.one.one.one/"
      }
    },
    {
      name: "9.9.9.9",
      image: "/static/img/9999.jpg",
      url: "https://www.quad9.net/about/",
      sources: {
        windows: "https://www.quad9.net/microsoft/",
        macos: "https://www.quad9.net/apple/"
      }
    }
  ],
  resources: [
    {
      name: "What is 1.1.1.1?",
      url: "https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/"
    },
    {
      name:
        "Cloudflare launches 1.1.1.1 DNS service that will speed up your internet",
      url:
        "https://www.theverge.com/2018/4/1/17185732/cloudflare-dns-service-1-1-1-1"
    },
    {
      name: "Cloudflare’s privacy-focused 1.1.1.1 is available on phones",
      url:
        "https://www.engadget.com/2018/11/11/cloudflare-1-1-1-1-privacy-service-on-phones/"
    },
    {
      name: "New “Quad9” DNS service blocks malicious domains for everyone",
      url:
        "https://arstechnica.com/information-technology/2017/11/new-quad9-dns-service-blocks-malicious-domains-for-everyone/"
    },
    {
      name: "Quad9, a Public DNS Resolver - with Security",
      url:
        "https://labs.ripe.net/Members/stephane_bortzmeyer/quad9-a-public-dns-resolver-with-security/"
    },
    {
      name: "Cloudflare and Quad9 Aim to Improve DNS",
      url:
        "https://tidbits.com/2018/04/20/cloudflare-and-quad9-aim-to-improve-dns/"
    }
  ]
};

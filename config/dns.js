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
      image: "/security-checklist/static/img/1111.jpg",
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
      image: "/security-checklist/static/img/9999.jpg",
      url: "https://www.quad9.net/about/",
      sources: {
        windows: "https://www.quad9.net/microsoft/",
        macos: "https://www.quad9.net/apple/"
      }
    }
  ],
  resources: [
    {
      name: "1.1.1.1 چیست؟",
      url: "https://www.cloudflare.com/learning/dns/what-is-1.1.1.1/"
    }    
  ]
};

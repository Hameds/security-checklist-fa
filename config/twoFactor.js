export default {
  id: "twoFactor",
  title: "از احراز هویت دو مرحله‌ای استفاده کنید",
  description: `احراز هویت دو مرحله‌ای (2FA) یک لایه اضافی امنیت به کلمه عبور می‌افزاید. 
  به کمک این قابلیت، با اجبار به ارائه اطلاعات دیگری، به جز کلمه عبور، می‌توان مطمئن شد شخصی که وارد یک حساب کاربری می‌شود، همان کسی است که ادعا می‌کند.
    
    \n\nاین اطلاعات دیگر، معمولاً چیزی است که شما آن را می‌دانید یا مختص شماست مثلاً چهره شما
    
    \n\n**نباید از شماره تلفن همراه خود برای احراز هویت دو مرحله‌ای استفاده کنید. **
    
    \n\nدر واقع تلاش کنید، تا کد احراز هویت دو مرحله‌ای از طریق پیامک برای شما ارسال نشود!     احراز هویت دو مرحله‌ای حداقل باید برای حساب‌های کاربری که می‌توانند باعث قفل شدن حساب‌های دیگر شما بشوند فعال شود، مثل: گوگل، اپل (Apple ID)  و ایمیل‌ها و حساب‌های بانکی.

    \n\nیک مثال: اگر با جیمیل خود در اسنپ ثبت‌نام کردید، اگر کسی کلمه عبور جیمیل شما را بداند و روی جیمیل، احراز هویت دو مرحله‌ای نداشته باشید، می‌تواند به اسنپ شما هم دست پیدا کند. بنابراین برای همه حساب‌های کاربری مهم، احراز هویت دو مرحله‌ای را به کمک یکی از برنامه‌های زیر فعال کنید.
    مطمئن شوید احراز هویت دو مرحله‌ای را برای همه حساب های کاربری سرویس‌هایی که از این قابلیت پشتیبانی می‌کنند فعال کرده‌اید.

    \n\n**توجه:** استفاده از نرم‌افزارهای همه‌کاره‌ای مثل 1Password هم برای مدیریت کلمه عبور *و هم* برای احراز هویت دو مرحله‌ای، صحیح نیست و یک نقطه ضعف ایجاد می‌کند. وقتی برای احراز هویت دو مرحله‌ای، در حال انتخاب نرم‌افزار هستید به این نکته توجه کنید.  
    
    
    `,
  apps: [
    {
      name: "1Password",
      image: "/static/img/1password.jpg",
      url: "https://1password.com/",
      sources: {
        windows: "https://1password.com/downloads/windows/",
        macos: "https://1password.com/downloads/mac/",
        ios: "https://1password.com/downloads/ios/",
        android: "https://1password.com/downloads/android/",
        linux: "https://1password.com/downloads/linux/"
      }
    },
    {
      name: "Authy",
      image: "/static/img/authy.jpg",
      url: "https://authy.com/",
      sources: {
        windows: "https://authy.com/download/",
        macos: "https://authy.com/download/",
        ios: "https://itunes.apple.com/us/app/authy/id494168017",
        android: "https://play.google.com/store/apps/details?id=com.authy.authy"
      }
    },
    {
      name: "Google Authenticator",
      image: "/static/img/google-authenticator.jpg",
      url: "https://www.google.com/landing/2step/",
      sources: {
        ios: "https://itunes.apple.com/us/app/google-authenticator/id388497605",
        android:
          "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_us"
      }
    },    
    {
      name: "Microsoft Authenticator",
      image: "/static/img/microsoft_authenticator_80.png",
      url: "https://www.microsoft.com/en-us/account/authenticator",
      sources: {
        ios: "https://itunes.apple.com/app/microsoft-authenticator/id983156458",
        android:
          "https://play.google.com/store/apps/details?id=com.azure.authenticator"
      }
    },
    {
      name: "Aegis Authenticator",
      image: "/static/img/aegis.png",
      url: "https://getaegis.app/",
      sources: {
        android:
          "https://play.google.com/store/apps/details?id=com.beemdevelopment.aegis"
      }
    },
    {
      name: "YubiKey",
      image: "/static/img/yubico.jpg",
      url: "https://www.yubico.com/"
    }
  ],
  resources: [
    {
      name: "راهنمای فارسی گوگل درباره احراز هویت دو مرحله‌ای",
      url: "https://www.google.com/landing/2step/?hl=fa"
    },
    {
      name: "What is two-factor authentication?",
      url: "https://authy.com/what-is-2fa/"
    },
    {
      name: "Two-factor authentication: a little goes a long way",
      url:
        "https://securityintelligence.com/two-factor-authentication-a-little-goes-a-long-way/"
    },
    {
      name: "So hey, you should stop using texts for two-factor authentication",
      url:
        "https://www.wired.com/2016/06/hey-stop-using-texts-two-factor-authentication/"
    },
    {
      name: "List of websites and whether or not they support 2FA.",
      url: "https://twofactorauth.org/"
    },
    {
      name: "Step-by-step instructions on enabling 2FA",
      url: "https://www.turnon2fa.com/"
    },
    {
      name:
        "List of websites and whether or not they support One Time Passwords (OTP) or Universal 2nd Factor (U2F)",
      url: "https://www.dongleauth.info/"
    }
  ]
};

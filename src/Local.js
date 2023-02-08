const currentLanguageCode = localStorage.getItem("i18nextLng") || "en";
const languages = [
  {
    code: "fr",
    name: "Français",
    dir: "ltr",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    dir: "ltr",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];
export const translationData = (lang, products, email, password) => {
  let data = {};
  switch (lang) {
    case "en":
      data = {
        app_title: "OnShop",
        Website_name: "OnShop",
        language: "Language",
        products: {},
        theme: {
          light: "Light Mode",
          dark: "Dark Mode",
        },
        nav_link: {
          home: "Home",
          products: "Products",
          cart: "Cart",
          profile: "Profile",
          login: "Login",
          btn: "Logout",
        },
        home: "Home",
        cart_logout: {
          cart_title: "Missing Cart Items?",
          cart_subtitle: "Login to see the items you added previously",
          cart_btn: "Login",
        },
        cart_login: {
          cart_title: "Your basket is empty!",
          cart_subtitle: "Enjoy Upto 10% Savings on Laptops",
          cart_btn: "Shop Now",
        },
        login: {
          labels: {
            email: "Email",
            password: "Password",
          },
          placeholder: {
            email: "name@example.com",
            password: "Password",
          },
          btn: "Login",
        },
        profile: {
          title: "User Details",
          labels: {
            email: "Email",
            password: "Password",
          },
          user_data: {
            email: email,
            password: password,
          },
        },
        error: {
          fill_details: "Fill all the Details",
          went_wrong: "Something Went Wrong",  
        },
      };
      return data;
    case "fr":
      data = {
        app_title: "surShop",
        Website_name: "surShop",
        language: "Langue",
        products: {},
        theme: {
          light: "Mode lumière",
          dark: "Mode sombre",
        },
        nav_link: {
          home: "Maison",
          products: "Des produits",
          cart: "Chariot",
          profile: "Profil",
          login: "Connexion",
          btn: "Se déconnecter",
        },
        home: "Maison",
        cart_logout: {
          cart_title: "Articles de panier manquants?",
          cart_subtitle:
            "Connectez-vous pour voir les éléments que vous avez ajoutés précédemment",
          cart_btn: "Connexion",
        },
        cart_login: {
          cart_title: "Votre panier est vide!",
          cart_subtitle:
            "Profitez jusqu'à 10% d'économies sur les ordinateurs portables",
          cart_btn: "Achetez maintenant",
        },
        login: {
          labels: {
            email: "Email",
            password: "Mot de passe",
          },
          placeholder: {
            email: "nom@exemple.com",
            password: "Mot de passe",
          },
          btn: "Connexion",
        },
        profile: {
          title: "Détails de l'utilisateur",
          labels: {
            email: "Email",
            password: "Mot de passe",
          },
          user_data: {
            email: email,
            password: password,
          },
        },
        error: {
          fill_details: "Remplissez tous les détails",
          went_wrong: "Quelque chose s'est mal passé",
        },
      };
      return data;
    case "ar":
      data = {
        app_title: "علىمحل",
        Website_name: "علىمحل",
        language: "لغة",
        products: {},
        theme: {
          light: "وضع الضوء",
          dark: "الوضع الداكن",
        },
        nav_link: {
          home: "بيت",
          products: "منتجات",
          cart: "عربة التسوق",
          profile: "حساب تعريفي",
          login: "تسجيل الدخول",
          btn: "تسجيل خروج",
        },
        home: "بيت",
        cart_logout: {
          cart_title: "عناصر عربة التسوق مفقودة؟",
          cart_subtitle: "تسجيل الدخول لرؤية العناصر التي أضفتها سابقا",
          cart_btn: "تسجيل الدخول",
        },
        cart_login: {
          cart_title: "سلتك فارغة!",
          cart_subtitle:
            "استمتع بتوفير يصل إلى 10٪ على أجهزة الكمبيوتر المحمولة",
          cart_btn: "تسوق الآن",
        },
        login: {
          labels: {
            email: "بريد إلكتروني",
            password: "كلمة المرور",
          },
          placeholder: {
            email: "اسم @ مثال.كوم",
            password: "كلمة المرور",
          },
          btn: "تسجيل الدخول",
        },
        profile: {
          title: "بيانات المستخدم",
          labels: {
            email: "بريد إلكتروني",
            password: "كلمة المرور",
          },
          user_data: {
            email: email,
            password: password,
          },
        },
        error: {
          fill_details: "املأ جميع البيانات",
          went_wrong: "هناك خطأ ما",
        },
      };
    default:
      return data;
  }
};
const fileData = JSON.stringify(translationData(currentLanguageCode));
console.log(currentLanguageCode);
const blob = new Blob([fileData], { type: "text/json" });
export const url = URL.createObjectURL(blob);

console.log(blob, url);

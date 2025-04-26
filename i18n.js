
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to Childcare Platform",
        "parentRequest": "👶 Parent Care Request",
        "sitterRegistration": "🧑‍🏫 Sitter Registration",
        "login": "Login with Google",
        "logout": "Logout",
      }
    },
    ko: {
      translation: {
        "welcome": "차일드케어 플랫폼에 오신 것을 환영합니다",
        "parentRequest": "👶 부모 돌봄 신청",
        "sitterRegistration": "🧑‍🏫 시터 등록",
        "login": "구글 로그인",
        "logout": "로그아웃",
      }
    }
  },
  lng: "ko",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;

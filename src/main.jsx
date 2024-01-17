import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
// traduccion
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// importar los fichero de los idiomas
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18n
  .use(initReactI18next) // conectar i18n con React
  .init({
    resources: {
      en: {
        translation: global_en
      },
      es: {
        translation: global_es
      }
    },
    lng: "en", // idioma por defecto
    fallbackLng: "en", // idioma de reserva
    interpolation: {
      escapeValue: false // no escapar valores HTML
    }
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

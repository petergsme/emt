import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'es' | 'ca' | 'en';

export const useLanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (localStorage.getItem('emt-language') as Language) || 'es'
  );

  useEffect(() => {
    const savedLanguage = (localStorage.getItem('emt-language') as Language) || 'es';
    i18n.changeLanguage(savedLanguage);
    setCurrentLanguage(savedLanguage);
  }, [i18n]);

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('emt-language', lang);
    setCurrentLanguage(lang);
  };

  const isActive = (lang: Language) => currentLanguage === lang;

  return {
    currentLanguage,
    changeLanguage,
    isActive,
    availableLanguages: ['es', 'ca', 'en'] as Language[],
  };
};

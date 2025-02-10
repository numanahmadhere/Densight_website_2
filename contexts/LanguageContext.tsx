"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar" | "fr" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const translations: Record<Language, Record<string, string>> = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      projects: "Projects",
      insights: "Insights",
      hero_title: "AI-Driven Insights for Business Growth",
      hero_subtitle: "Transform data into actionable strategies",
      explore_services: "Explore Our Services",
      footer_description: "Empowering businesses with data-driven insights.",
      company: "Company",
      resources: "Resources",
      case_studies: "Case Studies",
      privacy_policy: "Privacy Policy",
      terms_of_service: "Terms of Service",
      all_rights_reserved: "All rights reserved.",
      contact_us: "Contact Us",
    },
    ar: {
      home: "الرئيسية",
      about: "حول",
      services: "خدمات",
      contact: "اتصل بنا",
      projects: "المشاريع",
      insights: "رؤى",
      hero_title: "رؤى مدفوعة بالذكاء الاصطناعي لنمو الأعمال",
      hero_subtitle: "تحويل البيانات إلى استراتيجيات قابلة للتنفيذ",
      explore_services: "استكشف خدماتنا",
      footer_description: "تمكين الشركات من خلال الرؤى المستندة إلى البيانات.",
      company: "الشركة",
      resources: "الموارد",
      case_studies: "دراسات الحالة",
      privacy_policy: "سياسة الخصوصية",
      terms_of_service: "شروط الخدمة",
      all_rights_reserved: "جميع الحقوق محفوظة.",
      contact_us: "اتصل بنا",
    },
    fr: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contact: "Contact",
      projects: "Projets",
      insights: "Perspectives",
      hero_title: "Insights basés sur l'IA pour la croissance des entreprises",
      hero_subtitle: "Transformer les données en stratégies exploitables",
      explore_services: "Explorez nos services",
      footer_description: "Donner aux entreprises les moyens d'agir grâce à des insights basés sur les données.",
      company: "Entreprise",
      resources: "Ressources",
      case_studies: "Études de cas",
      privacy_policy: "Politique de confidentialité",
      terms_of_service: "Conditions d'utilisation",
      all_rights_reserved: "Tous droits réservés.",
      contact_us: "Contactez-nous",
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      contact: "Contacto",
      projects: "Proyectos",
      insights: "Perspectivas",
      hero_title: "Insights impulsados por IA para el crecimiento empresarial",
      hero_subtitle: "Transformar datos en estrategias accionables",
      explore_services: "Explora nuestros servicios",
      footer_description: "Empoderando a las empresas con insights basados en datos.",
      company: "Empresa",
      resources: "Recursos",
      case_studies: "Casos de estudio",
      privacy_policy: "Política de privacidad",
      terms_of_service: "Términos de servicio",
      all_rights_reserved: "Todos los derechos reservados.",
      contact_us: "Contáctenos",
    },
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}


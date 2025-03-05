"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { BookMeetingButton } from "./book-meeting-button"
import { Button } from "./button"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Densight_AI_Company_Logo-removebg-preview-qqyPart5uDUStbTAsylkc311s8FZ4t.webp"
                alt="Densight AI Logo"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <span className="text-xl sm:text-2xl font-bold text-primary">Densight AI</span>
            </Link>
            <p className="text-gray-500 text-base">{t("footer_description")}</p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/densightAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/densightAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/densight/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t("company")}</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-base text-gray-500 hover:text-gray-900">
                    {t("services")}
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-base text-gray-500 hover:text-gray-900">
                    {t("projects")}
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities" className="text-base text-gray-500 hover:text-gray-900">
                    {t("capabilities")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                    {t("contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t("resources")}</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/insights" className="text-base text-gray-500 hover:text-gray-900">
                    {t("insights")}
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-base text-gray-500 hover:text-gray-900">
                    {t("case_studies")}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900">
                    {t("privacy_policy")}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-base text-gray-500 hover:text-gray-900">
                    {t("terms_of_service")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm sm:text-base text-gray-400 text-center sm:text-left">
            &copy; 2025 Densight AI. {t("all_rights_reserved")}
          </p>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <BookMeetingButton />
            <Link href="/contact">
              <Button variant="outline">{t("contact_us")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


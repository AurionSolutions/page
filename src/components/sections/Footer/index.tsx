'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-backgroundSecondary w-full">
      <div className=" mx-auto px-6 py-8">
        {/* Top: brand + menu */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* BRAND */}
          <div className="flex-shrink-0 flex items-start gap-4">
            <Link href="/" aria-label="Ir para a página inicial" className="flex items-center gap-3">
              <Image src={logo} alt="Logo Arthur Santos" width={48} height={48} />
              <div>
                <span className="block text-md font-bold leading-tight">Arthur Santos</span>
                <span className="block text-xs text-gray-600">Transformando ideias em realidade</span>
              </div>
            </Link>
          </div>

          {/* NAV LINKS (colapsa automaticamente em mobile) */}
          <nav aria-label="Menu do rodapé" className="w-full flex item-center gap-8 md:w-auto">
            <ul className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 items-start md:items-start">
              {/* Coluna 1 - Menu */}
              <li className="min-w-[120px]">
                <h4 className="font-semibold text-lg mb-2">Menu</h4>
                <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-md py-1">
                  <li><Link href="#homeSection" className="transition hover:underline">Início</Link></li>
                  <li><Link href="#WorksSection" className="transition hover:underline">Experiências</Link></li>
                  <li><Link href="#ProjectsSection" className="transition hover:underline">Projetos</Link></li>
                  <li><Link href="#TechnologiesSection" className="transition hover:underline">Tecnologias</Link></li>
                  <li><Link href="#ContactSection" className="transition hover:underline">Contato</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 items-start md:items-start">
              {/* Coluna 1 - Menu */}
              <li className="min-w-[120px]">
                <h4 className="font-semibold text-lg mb-2">Social</h4>
                <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-md">
                  <li>
                    <a href="https://github.com/DevArthurSantos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" >
                      <FaGithub size={34} className="rounded-md p-1 hover:bg-gray-400 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/BzVR4RbtGA" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                      <AiOutlineDiscord size={34} className="rounded-md p-1 hover:bg-gray-400 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5581994920769" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" >
                      <FaWhatsapp size={34} className="rounded-md p-1 hover:bg-gray-400 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/artthur00s/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" >
                      <IoLogoInstagram size={34} className="rounded-md p-1 hover:bg-gray-400 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/devarthursantos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin size={34} className="rounded-md p-1 hover:bg-gray-400 transition" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Separator */}
        <hr className="my-4 border-gray-300" />

        {/* Bottom: copyright + quick social icons (compact) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p className="text-center md:text-left">
            © {year} <Link href="/" className="text-primary italic font-bold underline">Arthur Santos</Link>. Todos os direitos reservados.
          </p>
        </div>
      </div >
    </footer >
  );
}

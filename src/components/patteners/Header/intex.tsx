'use client'
import Image from 'next/image';
import logo from '@/assets/logo.png'
import menuIcon from '@/assets/menu-icon.png'
import closedMenu from '@/assets/closed-menu.png'
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Header() {
  // Estado para menu mobile
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // Estado para adicionar sombra somente após scroll
  const [hasShadow, setHasShadow] = useState(false);
  // Item ativo do menu (id da seção)
  const [active, setActive] = useState('homeSection');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const menuItems = [
    { id: 'homeSection', label: 'INÍCIO' },
    { id: 'WorksSection', label: 'EXPERIÊNCIAS' },
    { id: 'ProjectsSection', label: 'PROJETOS' },
    { id: 'TechnologiesSection', label: 'TECNOLOGIAS' },
    { id: 'ContactSection', label: 'CONTATO' },
  ];

  // Toggle de sombra ao rolar a página
  useEffect(() => {
    const onScroll = () => {
      setHasShadow(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Observer para detectar a seção visível e marcar o item ativo
  useEffect(() => {
    const sections = menuItems
      .map((m) => document.getElementById(m.id))
      .filter(Boolean) as HTMLElement[];

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // ordena por interseção e visibilidade
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observerRef.current?.observe(s));

    return () => observerRef.current?.disconnect();
  }, []);

  // Quando clicar num item do menu, fecha mobile e faz scroll suave
  const handleClick = (id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed w-full top-0 left-0 right-0 z-50 transition-shadow duration-200 ${hasShadow && !isMobileOpen
        ? 'shadow-md backdrop-blur-xl bg-white/70 border-b'
        : hasShadow
          ? 'shadow-md bg-white/70 border-b'
          : 'bg-transparent'
      }`}>
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3" aria-label="Ir para o início">
          <Image src={logo} width={56} height={32} alt="logotipo" />
          <span className="sr-only">Home</span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`px-3 py-2 text-sm font-bold rounded-md transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary
                  ${active === item.id ? 'text-primary underline underline-offset-8 decoration-2' : 'text-slate-700 hover:text-primary'}`}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* BOTÃO AÇÃO / CTA (opcional) */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#ContactSection" onClick={() => handleClick('ContactSection')} className="text-sm font-semibold px-4 py-2 rounded-full border border-slate-200 hover:border-primary transition">
            Vamos conversar
          </a>
        </div>

        {/* HAMBURGUER (MOBILE) */}
        <div className="lg:hidden">
          <button
            aria-expanded={isMobileOpen}
            aria-label="Abrir menu"
            className="p-2 rounded-md focus:outline-none"
            onClick={() => setIsMobileOpen((s) => !s)}
          >
            <Image src={isMobileOpen ? closedMenu : menuIcon} width={84} height={84} alt="menu" />
          </button>
        </div>

        {/* MENU MOBILE (OVERLAY) */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/30" onClick={() => setIsMobileOpen(false)} />
            <div className="absolute right-0 top-0 w-full h-full bg-white p-6 shadow-lg">
              <nav>
                <ul className="flex flex-col items-center gap-4">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleClick(item.id)}
                        className={`w-full text-left px-3 py-3 rounded-md font-semibold transition-all ${active === item.id ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50'}`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a href="#ContactSection" onClick={() => handleClick('ContactSection')} className="block text-center font-semibold px-4 py-2 rounded-full border">
                    Vamos conversar
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

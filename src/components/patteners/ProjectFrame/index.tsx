'use client'
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  projectIndex: number;
  total: number;
  name: string;
  href: string;
  nextProject: () => void;
  previousProject: () => void;
  isFirst: boolean;
  isLast: boolean;
};

/**
 * ProjectFrame.tsx
 * - mostra preview do projeto (imagem numerada /projects/1.png ...)
 * - botões prev/next com estado disabled
 * - swipe em mobile
 * - mostra nome do projeto e indicador index/total
 */

export default function ProjectFrame({
  projectIndex,
  total,
  name,
  href,
  nextProject,
  previousProject,
  isFirst,
  isLast,
}: Props) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const minSwipe = 40;

  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx > minSwipe) previousProject();
    else if (dx < -minSwipe) nextProject();
    setTouchStartX(null);
  };

  // Usa imagens numeradas: /public/projects/1.png, /public/projects/2.png, ...
  const imgSrc = useMemo(() => `/projects/${projectIndex + 1}.png`, [projectIndex]);

  return (
    <div
      className="relative w-full max-w-[1100px] md:max-w-[900px] lg:max-w-[960px] rounded-xl"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="aspect-[16/9] w-full relative">
        <Image
          src={imgSrc}
          alt={`${name} — preview`}
          fill
          style={{ objectFit: "fill" }}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 700px, 760px"
          className="transition-transform duration-500 ease-in-out hover:scale-[1.02]"
        />
      </div>

      {/* Link cobrindo a imagem (abre em nova aba) */}
      <Link href={href} target="_blank" aria-label={`Abrir ${name}`} className="absolute inset-0" />


      {/* Botões prev/next */}
      <button
        onClick={previousProject}
        aria-label="Projeto anterior"
        disabled={isFirst}
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow-md transition-opacity duration-150 focus:outline-none ${
          isFirst ? "opacity-40 pointer-events-none bg-transparent" : "opacity-100 hover:scale-105 bg-white"
        }`}
      >
        <IoIosArrowBack size={28} className="text-primary" />
      </button>
      <button
        onClick={nextProject}
        aria-label="Próximo anterior"
        disabled={isLast}
        className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow-md transition-opacity duration-150 focus:outline-none ${
          isLast ? "opacity-40 pointer-events-none bg-transparent" : "opacity-100 hover:scale-105 bg-white"
        }`}
      >
        <IoIosArrowForward size={28} className="text-primary" />
      </button>
      {/* Indicador index/total */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 bg-gray-300 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
        {projectIndex + 1} / {total}
      </div>
    </div>
  );
}

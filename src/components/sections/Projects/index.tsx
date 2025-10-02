'use client'
import { useCallback, useEffect, useMemo, useState } from "react";
import ProjectFrame from "@/components/patteners/ProjectFrame";
import ProjectFeature from "@/components/common/ProjectFeature";
import { projectsInfos } from "@/fundations/utils/projectsInfos";

/**
 * ProjectsSection.tsx
 * - controla o índice atual e passa props para ProjectFrame e ProjectFeature
 */

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const total = projectsInfos.length;

  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const project = useMemo(() => projectsInfos[index], [index]);

  return (
    <section id="ProjectsSection" className="w-full px-4 md:px-12 lg:px-[120px]">
      <h2 className="mt-2 text-center text-lg md:text-xl lg:text-2xl font-bold">
        MEUS <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">PROJETOS</span>
      </h2>

      <div className="my-4 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-4">
        <ProjectFrame
          key={index}
          projectIndex={index}
          total={total}
          name={project.name}
          href={project.href}
          nextProject={next}
          previousProject={prev}
          isFirst={index === 0}
          isLast={index === total - 1}
        />

        <ul
          aria-label="Recursos do projeto"
          className="flex w-full lg:w-[340px] xl:w-[380px] flex-wrap lg:flex-col gap-4 p-2"
        >
          {project.features.map((f, i) => (
            <ProjectFeature key={i} number={i + 1} title={f.title} text={f.text} />
          ))}
        </ul>
      </div>
    </section>
  );
}

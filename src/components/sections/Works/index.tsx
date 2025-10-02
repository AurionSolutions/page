// WorksSection.tsx
"use client";

import { motion } from "framer-motion";
import WorkComponent from "@/components/common/WorkComponent";
import { worksInfos } from "@/fundations/utils/worksInfos";

export default function WorksSection() {
  return (
    <section
      id="WorksSection"
      className="w-full px-6 md:px-20 lg:px-32 py-12"
    >
      <h2 className="text-center font-bold text-lg md:text-2xl lg:text-3xl tracking-tight">
        MINHAS{" "}
        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          EXPERIÊNCIAS DE TRABALHO
        </span>
      </h2>

      <motion.ul
        className="mt-10 flex flex-col gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
      >
        {worksInfos.map((work, i) => (
          <motion.li
            key={i}
            className="h-fit md:h-[187px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <WorkComponent
              company={work.company}
              date={work.date}
              position={work.position}
              text={work.text}
              isLast={i === worksInfos.length - 1}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
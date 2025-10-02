import { useRef, useEffect } from "react";

type WorkComponentProps = {
  company: string;
  position: string;
  date: string;
  text: string;
  isLast: boolean;
};

export default function WorkComponent({
  company,
  date,
  position,
  text,
  isLast,
}: WorkComponentProps) {
  const isMoment = date.split(" ")[date.split(" ").length - 1] === "momento";

  const liRef = useRef<HTMLLIElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isLast && liRef.current && lineRef.current) {
      const li = liRef.current;
      const nextLi = li.nextElementSibling as HTMLElement | null;

      if (nextLi) {
        // pega posição relativa à página
        const liBottom = li.getBoundingClientRect().bottom + window.scrollY;
        const nextLiTop = nextLi.getBoundingClientRect().top + window.scrollY;
        const distance = nextLiTop - liBottom;

        // adiciona uma margem extra, se necessário
        lineRef.current.style.height = `${distance + 16}px`;
      }
    }
  }, [isLast]);

  return (
    <li
      ref={liRef}
      className="relative max-w-[1000px] flex bg-backgroundSecondary flex-col p-4 rounded-md m-auto items-start justify-start gap-4 text-sm lg:text-lg md:flex-row md:w-full md:bg-transparent md:justify-between"
    >
      <div className="flex items-start flex-col gap-4 max-w-[80px]">
        <h3 className="font-bold whitespace-nowrap">{company}</h3>
        <h3 className="font-bold text-[12px] text-textSecondary whitespace-nowrap">
          {date}
        </h3>
      </div>

      <div className="absolute md:hidden lg:block md:relative top-2 right-2 border-dashed p-1 border-2 border-black rounded-full flex flex-col items-center">
        <span
          className={`h-2 w-2 md:h-5 md:w-5 rounded-full flex items-center justify-center text-xl font-bold text-background ${isMoment ? "bg-gradient-to-r from-primary to-purple-500" : "bg-black"
            }`}
        ></span>


        <span
          ref={lineRef}
          className={`absolute top-full left-1/2 -translate-x-1/2 w-[2px] border-0 md:border-l-2 border-dashed border-black`}
          style={{ height: isLast ? "0" : "190px" }}
        ></span>
      </div>

      <div className="flex items-start flex-col max-w-[400px]">
        <h3 className="font-bold text-[16px]">{position}</h3>
        <p className="text-[13px] font-semibold text-textSecondary">{text}</p>
        <span className="border-gray-300 border-b border-l-2 border-dashed mt-2 w-full"></span>
      </div>
    </li>
  );
}

import Image from 'next/image';

export default function TechnologiesSection() {
  return (
    <section id="TechnologiesSection" className="py-[44px] w-full px-[60px] md:px-[120px]">
      <h2 className="mt-2 text-sm md:text-md lg:text-[24px] font-bold text-center">
        FERRAMENTAS E <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">TECNOLOGIAS</span>.
      </h2>
      <p className="mt-2 text-sm md:text-md lg:text-[16px] text-center">
        Algumas tecnologias e ferramentas com as quais trabalho e tenho maiores afinidades
      </p>

      <div className="flex flex-wrap flex-col justify-center gap-4 mt-4">
        <div className="flex flex-wrap justify-center gap-4 mt-4 max-w-[600px] m-auto">
          {Array.from({ length: 20 }).map((_, index) => {
          const size = index + 1 > 19 ? 76 : 34;
          const delay = (index + 1) * 100;

          return (
            <Image
              key={index}
              src={`/technologies/${index + 1}.png`}
              alt={`Tecnologia ${index}`}
              width={size}
              height={40}
              blurDataURL={`/technologies/${index}.png`}
              className={`animate-bounce`}
              style={{ animationDelay: `${delay}ms`, animationDuration: "2s" }}
            />
          );
        })}
        </div>
      </div>
    </section>
  );
}

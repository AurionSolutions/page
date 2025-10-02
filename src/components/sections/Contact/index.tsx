import Image from "next/image";
import contactHero from "@/assets/contact-hero.svg"
import contactBackground from "@/assets/contact-background.svg"
import ContactFrom from "@/components/common/ContactFrom";


export default function ContactSection() {

  return (
    <section id="ContactSection" className="w-full px-[60px] md:px-[120px] relative">
      <h2 className="mt-2 text-sm md:text-md lg:text-[24px] font-bold text-center">TEM UMA IDEIA DE PROJETO INCRÍVEL?<span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent block mt-2">VAMOS CONVERSAR!</span></h2>
      <div className="flex items-center justify-center gap-8 md:gap-10 w-full h-full my-8">
        <div className="w-[300px] md:w-[500px] xl:w-[750px] hidden md:block z-10">
          <Image
            src={contactHero}
            alt=""
            width={758}
            height={333}
            priority={true}
            style={{ objectFit: "fill" }}
          />
        </div>
        <ContactFrom />
      </div>
      <Image
        src={contactBackground}
        alt=""
        priority={true}
        style={{ objectFit: "fill" }}
        className="absolute w-full bottom-0 left-0"
      />
    </section>
  )

}
import { ReactNode } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";

type InputsFactoryProps = {
  type?: string
  mask?: string
  name: string
  icon: ReactNode
  placeholder: string
}

function InputsFactory({ type="text", name, icon, placeholder }: InputsFactoryProps) {

  return (
    <div className="relative mb-6 max-w-[325px] flex-1">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>
      <input name={name} type={type} className="ps-10 p-2.5 border border-[#E8E8E8] bg-white rounded-md"  placeholder={placeholder} />
    </div>
  )
}


export default function ContactFrom() {

  return (
    <form className="p-4 lg:h-full flex flex-col items-start justify-between gap-4 flex-nowrap z-10">
      <h3 >FORMULARIO PARA CONTATO</h3>
      <div className="flex flex-col justify-center">
        <InputsFactory name="name" icon={<CgProfile />} placeholder="Seu nome" />
        <InputsFactory name="email" icon={<HiOutlineMail />} placeholder="Seu email" />
        <InputsFactory name="subject" icon={<BsChatLeftText />} placeholder="Assunto" />
        <InputsFactory type='number' name="tel" icon={<LuPhoneCall />} placeholder="Telefone" />
        <input type="submit" className="cursor-pointer shadow-md bg-backgroundSecondary border border-[#E8E8E8] bg-white rounded-md py-4 px-6" />
      </div>
    </form>
  )

}
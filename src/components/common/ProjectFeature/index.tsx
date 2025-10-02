'use client'
type Props = {
  number: number;
  title: string;
  text: string;
};


export default function ProjectFeature({ number, title, text }: Props) {
  return (
    <li className="flex gap-4 items-start bg-white/60 rounded-lg p-4 shadow-lg min-w-[220px] max-w-full">
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
        {number}
      </div>

      <div className="flex-1">
        <h3 className="text-sm md:text-base font-semibold">{title}</h3>
        <p className="mt-1 text-xs md:text-sm text-gray-600">{text}</p>
      </div>
    </li>
  );
}

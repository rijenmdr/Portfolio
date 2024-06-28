import Image from "next/image";

type Props = {
    name: string;
    image: string;
}

const SkillCard = ({
    name,
    image
}: Props) => {
  return (
    <div className="rounded-full px-10 py-4 shadow-sm cursor-pointer flex justify-center items-center gap-8 bg-white hover:linear-gradient hover:border-none hover:text-white">
        <Image
            src={image}
            alt={name}
            width={32}
            height={32}
            className="object-cover"
        />

        <p className="text-sm font-bold md:text-2">
            {name}
        </p>
    </div>
  )
}

export default SkillCard
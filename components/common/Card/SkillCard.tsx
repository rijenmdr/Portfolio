import Image from "next/image";
import { Image as ImageType } from "@/type/image";

type Props = {
    name: string;
    image: ImageType;
}

const SkillCard = ({
    name,
    image
}: Props) => {
  return (
    <div className="rounded-full px-10 py-4 shadow-sm cursor-pointer flex justify-center items-center gap-8 bg-white hover:linear-gradient hover:border-none hover:text-white">
        <Image
            src={image?.image}
            alt={image?.alt}
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
import Image from "next/image";
import Link from "next/link";

import { Image as ImageType } from "@/type/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Props = {
  name: string;
  category: string;
  link: string;
  image: ImageType;
}

const ProjectCard = ({ name, category, link, image }: Props) => {
  return (
    <Link href={link} target="_blank" className="flex justify-between flex-col-reverse md:flex-row gap-4 md:gap-16 min-h-[232px] group">
      <div className="flex flex-col justify-between gap-2 md:gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-base italic text-primary">
            {category}
          </p>

          <h4 className="heading-6 md:heading-4 text-primary line-clamp-3">
            {name}
          </h4>
        </div>

        <ArrowUpRight weight="bold" className="text-primary h-8 md:h-12 w-8 md:w-12 group-hover:text-purple" />
      </div>
    
      <Image
        src={image?.image || "/images/default.png" }
        alt={image?.alt || name}
        width={300}
        height={0}
        className="h-full rounded-sm object-contain max-h-[232px]"
      />
    </Link>
  )
}

export default ProjectCard
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  category: string;
  link: string;
  image: string;
}

const ProjectCard = ({ name, category, link, image }: Props) => {
  return (
    <Link href={link} target="_blank" className="flex justify-between flex-col-reverse md:flex-row gap-4 md:gap-16 min-h-[232px]">
      <div className="flex flex-col justify-between gap-2 md:gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-base italic text-primary">
            {category}
          </p>

          <h4 className="heading-6 md:heading-4 text-primary line-clamp-3">
            {name}
          </h4>
        </div>

        <ArrowUpRight weight="bold" className="text-primary h-8 md:h-12 w-8 md:w-12" />
      </div>

      <Image
        src={image}
        alt={name}
        width={300}
        height={0}
        className="h-full rounded-sm"
      />
    </Link>
  )
}

export default ProjectCard
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
    <Link href={link} target="_blank" className="flex justify-between flex-col-reverse md:flex-row  gap-4 md:gap-16">
      <div className="flex flex-col justify-between gap-2 md:gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-2 italic text-primary">
            {category}
          </p>

          <h3 className="heading-5 md:heading-3 text-primary line-clamp-3">
            {name}
          </h3>
        </div>

        <ArrowUpRight weight="bold" className="text-primary h-8 md:h-16  w-8 md:w-16" />
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
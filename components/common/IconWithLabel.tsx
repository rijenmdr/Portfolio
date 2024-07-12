import Link from "next/link";
import { ReactNode } from "react"

type Props = {
    id: string;
    icon: ReactNode;
    label: string;
}

const IconWithLabel = ({ id, icon, label }: Props) => {
    let link = ""

    switch (id) {
        case "phone-number":
            link = `tel:${label}`;
            break;
        case "email":
            link = `mailto:${label}`
            break;
    }
    return (
        <Link href={link} passHref>
            <div className="flex gap-3 items-center">
                <div className="bg-primary/5 flex items-center justify-center rounded-full w-8 h-8">
                    {icon}
                </div>

                <p className="text-primary text-lg font-bold leading-normal italic">
                    {label}
                </p>
            </div>
        </Link>
    )
}

export default IconWithLabel
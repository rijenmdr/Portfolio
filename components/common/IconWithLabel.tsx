import { ReactNode } from "react"

type Props = {
    icon: ReactNode;
    label: string;
}

const IconWithLabel = ({ icon, label }: Props) => {
    return (
        <div className="flex gap-3 items-center">
            <div className="bg-primary/5 flex items-center justify-center rounded-full w-8 h-8">
                {icon}
            </div>

            <p className="text-primary text-lg font-bold leading-normal italic">
                {label}
            </p>
        </div>
    )
}

export default IconWithLabel
import { Mailbox, MapPin, Phone, UserRectangle } from "@phosphor-icons/react/dist/ssr"
import IconWithLabel from "@/components/common/IconWithLabel"
import { Separator } from "@/components/ui/separator"
import Quote from "@/components/common/Quote"

type Props = {}

const PersonalDetail = ({ }: Props) => {
    const details = [
        {
            id: 1,
            icon: <Phone weight="bold" size={20} />,
            value: "+977 9813103122"
        },
        {
            id: 2,
            icon: <UserRectangle weight="bold" size={20} />,
            value: "25 yrs"
        },
        {
            id: 3,
            icon: <Mailbox weight="bold" size={20} />,
            value: "rijenmdr47@gmail.com"
        },
        {
            id: 4,
            icon: <MapPin weight="bold" size={20} />,
            value: "Kathmandu, Nepal"
        }
    ]

    return (
        <div className="flex flex-col gap-8 max-w-[683px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    details?.map(detail => (
                        <IconWithLabel
                            key={detail?.id}
                            icon={detail?.icon}
                            label={detail?.value}
                        />
                    ))
                }
            </div>

            <Separator />

            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                    <h2 className="heading-2 linear-gradient text-transparent bg-clip-text">
                        3+
                    </h2>

                    <p className="text-1 italic !font-bold">
                        Years
                        <span className="block">experience...</span>
                    </p>
                </div>

                <p className="text-1">Hello there! My name is <span className="text-purple">Rijen Manandhar</span>.
                    <span className="block">I am a developer, and I'm very passionate and dedicated to my work.</span></p>
            </div>

            <Quote
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin."
            />
        </div>
    )
}

export default PersonalDetail
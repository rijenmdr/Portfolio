import { Mailbox, MapPin, Phone, UserRectangle } from "@phosphor-icons/react/dist/ssr"
import IconWithLabel from "@/components/common/IconWithLabel"
import { Separator } from "@/components/ui/separator"
import Quote from "@/components/common/Quote"
import { convertDobInYears } from "@/lib/utils"

type Props = {
    phone: string;
    dateOfBirth: string;
    email: string;
    city: string;
    country: string;
    experience: string;
    name: string;
    headline: string;
    quote: string;
    quoteBy: string;
}

const PersonalDetail = ({ city, country, dateOfBirth, email, experience, headline, name, phone, quote, quoteBy }: Props) => {
    const details = [
        {
            id: "phone-number",
            icon: <Phone weight="bold" size={20} />,
            value: phone
        },
        {
            id: "dob",
            icon: <UserRectangle weight="bold" size={20} />,
            value: `${convertDobInYears(dateOfBirth)} yrs`
        },
        {
            id: "email",
            icon: <Mailbox weight="bold" size={20} />,
            value: email
        },
        {
            id: "location",
            icon: <MapPin weight="bold" size={20} />,
            value: `${city}, ${country}`
        }
    ]
    return (
        <div className="flex flex-col gap-8 max-w-[683px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    details?.map(detail => (
                        <IconWithLabel
                            key={detail?.id}
                            id={detail?.id}
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
                        {experience}+
                    </h2>

                    <p className="text-1 italic !font-bold">
                        Years
                        <span className="block">experience...</span>
                    </p>
                </div>

                <p className="text-1">Hello there! My name is <span className="text-purple">{name}</span>.
                    <span className="block">{headline}</span></p>
            </div>

            <Quote
                quote={quote}
                quoteBy={quoteBy}
            />
        </div>
    )
}

export default PersonalDetail
import Link from "next/link"

type Props = {}

const ContactDetail = ({ }: Props) => {
    const socialMedias = [
        {
            id: 1,
            label: "Facebook",
            link: "https://facebook.com"
        },
        {
            id: 2,
            label: "Instagram",
            link: "https://instagram.com"
        },
        {
            id: 3,
            label: "LinkedIn",
            link: "https://linkedin.com"
        }
    ]
    return (
        <div className="flex gap-4 md:gap-8 lg:gap-20 flex-col">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 md:gap-4">
                    <h6 className='text-base md:text-1 font-semibold italic'>
                        Contact
                    </h6>

                    <h2 className='heading-4 md:heading-2'>
                        Reach out me
                    </h2>
                </div>

                <p className="text-base text-primary">
                    Tahachal, Kathmandu, Nepal
                </p>
            </div>

            <div className="flex flex-col gap-2 lg:gap-5 text-primary">
                <h4 className="heading-6 md:heading-4">
                    +977-9813103122
                </h4>
                <h4 className="heading-6 md:heading-4 ">
                    rijenmdr47@gmail.com
                </h4>
            </div>

            <ul className="flex gap-6 items-center">
                {
                    socialMedias?.map(socialMedia => (
                        <li key={socialMedia?.id} className="capitalize text-base font-medium">
                            <Link href={socialMedia?.link} target="_blank">
                                {socialMedia?.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ContactDetail
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

type Props = {}

const ContentSocialMedia = ({ }: Props) => {
    const socialMedias = [
        {
            id: 1,
            icon: <FacebookLogo size={24} weight="bold" />,
            link: "https://www.facebook.com/rijenmdr"
        },
        {
            id: 2,
            icon: <InstagramLogo size={24} weight="bold" />,
            link: "https://www.instagram.com/sayami_rijen/"
        },
        {
            id: 3,
            icon: <LinkedinLogo size={24} weight="bold" />,
            link: "https://www.linkedin.com/in/rijenmanandhar/"
        }
    ]
    return (
        <div className="flex-col gap-5 hidden xl:flex">
            {
                socialMedias?.map(socialMedia => (
                    <Link href={socialMedia?.link} target="_blank" key={socialMedia?.id} className="border w-10 h-10 rounded-full flex justify-center items-center text-primary hover:linear-gradient hover:text-white">
                        {socialMedia?.icon}
                    </Link>
                ))
            }
        </div>
    )
}

export default ContentSocialMedia
import { FacebookLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { SocialLinks } from '@/type/user'

type Props = {
    socialLinks: SocialLinks
}

const ContentSocialMedia = ({ socialLinks }: Props) => {
    const socialMedias = [
        {
            id: 1,
            icon: <FacebookLogo size={24} weight="bold" />,
            link: socialLinks?.facebook
        },
        {
            id: 2,
            icon: <GithubLogo size={24} weight="bold" />,
            link:  socialLinks?.github
        },
        {
            id: 3,
            icon: <LinkedinLogo size={24} weight="bold" />,
            link: socialLinks?.linkedin
        }
    ]
    return (
        <div className="flex-col items-center gap-5 hidden xl:flex">
            {
                socialMedias?.map(socialMedia => (
                    <Link href={socialMedia?.link} target="_blank" key={socialMedia?.id} className="border w-10 h-10 rounded-full flex justify-center items-center text-primary hover:linear-gradient hover:text-white">
                        {socialMedia?.icon}
                    </Link>
                ))
            }

            <Separator className='h-[131px] w-[.1rem]' orientation='vertical' />
        </div>
    )
}

export default ContentSocialMedia
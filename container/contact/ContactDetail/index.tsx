import { getHomeProfile } from "@/sanity/sanity.query"
import { HOMEPAGE_GET_PROFILE_PROJECTION } from "@/static/home";
import { User } from "@/type/user";
import Link from "next/link"

type Props = {}

const ContactDetail = async({ }: Props) => {
    const profileData: User = await getHomeProfile(HOMEPAGE_GET_PROFILE_PROJECTION);

    const socialMedias = [
        {
            id: 1,
            label: "Facebook",
            link: profileData?.socialLinks?.facebook
        },
        {
            id: 2,
            label: "Github",
            link: profileData?.socialLinks?.github
        },
        {
            id: 3,
            label: "LinkedIn",
            link: profileData?.socialLinks?.linkedin
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
                    {profileData?.city}, {profileData?.country}
                </p>
            </div>

            <div className="flex flex-col gap-1 lg:gap-5 text-primary">
                <h4 className="heading-6 md:heading-5">
                    {profileData?.phoneNumber}
                </h4>
                <h4 className="heading-6 md:heading-5">
                    {profileData?.email}
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
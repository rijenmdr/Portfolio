import ContentImage from "@/container/home/ContentImage";
import ContentLeft from "@/container/home/ContentLeft";
import ContentSocialMedia from "@/container/home/ContentSocialMedia";
import { getHomeProfile } from "@/sanity/sanity.query";
import { HOMEPAGE_GET_PROFILE_PROJECTION } from "@/static/home";
import { User } from "@/type/user";

export default async function Home() {
  const data: User = await getHomeProfile(HOMEPAGE_GET_PROFILE_PROJECTION);

  return (
    <section className="flex flex-col-reverse lg:flex-row w-full justify-between items-center">
      <ContentLeft
        name={data?.fullName}
        role={data?.role}
        city={data?.city}
        email={data?.email}
        phoneNumber={data?.phoneNumber}
      />

      <ContentImage
        image={data?.profileImage}
      />

      <ContentSocialMedia 
        socialLinks={data?.socialLinks}
      />
    </section>
  );
}

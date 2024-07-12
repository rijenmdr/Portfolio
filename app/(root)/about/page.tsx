import SectionHeading from '@/components/common/SectionHeading'
import BasicDetail from '@/container/about/BasicDetail'
import MyExperience from '@/container/about/MyExperience'
import PersonalDetail from '@/container/about/PersonalDetail'
import { getHomeProfile } from '@/sanity/sanity.query'
import { ABOUT_GET_PROFILE_PROJECTION } from '@/static/about'
import { User } from '@/type/user'

type Props = {}

async function About({ }: Props) {
  const data: User = await getHomeProfile(ABOUT_GET_PROFILE_PROJECTION);
  return (
    <section className='mt-4 md:mt-8'>
      <SectionHeading
        title='Welcome to...'
        subTitle='Nice to meet you!'
      />

      <div className='flex justify-between gap-8 items-center flex-col md:flex-row mb-10 md:mb-[110px]'>
        <BasicDetail 
          name={data?.fullName}
          image={data?.secondaryImage}
          city={data?.city}
          resumeUrl={data?.resumeURL}
          role={data?.role}
        />

        <PersonalDetail 
          name={data?.fullName}
          city={data?.city}
          country={data?.country}
          dateOfBirth={data?.dateOfBirth}
          email={data?.email}
          experience={data?.experience}
          headline={data?.headline}
          phone={data?.phoneNumber}
          quote={data?.quote}
          quoteBy={data?.quoteBy}
        />
      </div>

      <MyExperience/>
    </section>
  )
}

export default About
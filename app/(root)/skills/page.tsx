import SectionHeading from "@/components/common/SectionHeading"
import SkillSection from "@/components/common/SkillSection"
import { getAllSkill } from "@/sanity/sanity.query"
import { Skill } from "@/type/skills"

type Props = {}

const ToolsPage = async ({ }: Props) => {
  const skills: Skill[] = await getAllSkill();
  
  const technologicalSkills = skills?.length ? skills?.filter(skill => skill?.type === "technologies") : [];
  const developmentSkills = skills?.length ? skills?.filter(skill => skill?.type === "development-tools") : [];

  return (
    <section className='mt-4 md:mt-8'>
      <SectionHeading
        title='Skills I have acquired'
        subTitle='Skills'
      />

      <SkillSection
        title="Technologies I Use"
        tools={technologicalSkills}
      />

      <SkillSection
        title="Development Tools"
        tools={developmentSkills}
      />
    </section>
  )
}

export default ToolsPage
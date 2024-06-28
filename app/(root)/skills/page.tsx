import SectionHeading from "@/components/common/SectionHeading"
import SkillSection from "@/components/common/SkillSection"
import { toolsUsed } from "@/static/tools"

type Props = {}

const ToolsPage = ({ }: Props) => {
  return (
    <section className='mt-4 md:mt-8'>
      <SectionHeading
        title='Skills I have acquired'
        subTitle='Skills'
      />

      <SkillSection
        title="Technologies I Use"
        tools={toolsUsed}
      />

      <SkillSection
        title="Development Tools"
        tools={toolsUsed}
      />
    </section>
  )
}

export default ToolsPage
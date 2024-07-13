export type SkillType = "development-tools" | "technologies"

export type Skill = {
    _id: string,
    name: string,
    type: SkillType
    logo: {
        alt: string;
        image: string;
    }
}
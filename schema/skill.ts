// schemas/skill.ts

import { defineField } from "sanity";

const skill = {
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "logo",
            title: "Skill Logo",
            type: "image",
            description: "Upload a logo",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        defineField({
            title: "Category",
            description: "Pick the category of skill",
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "Technologies I Use", value: "technologies" },
                    { title: "Development Tools", value: "development-tools" },
                ],
            },
            validation: (rule) => rule.required(),
        }),
    ],
};

export default skill;
// schemas/project.ts

import { defineField } from "sanity";

const project = {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "logo",
            title: "Project Logo",
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
        {
            name: "category",
            title: "Category Name",
            type: "string",
        },
        {
            name: "url",
            title: "Project URL",
            type: "url",
          },
    ],
};

export default project;
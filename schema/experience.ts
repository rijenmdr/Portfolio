// schemas/experience.ts

const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "role",
            title: "Role",
            type: "string",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
        },
        {
            name: "companyName",
            title: "Company Name",
            type: "string",
        }
    ],
};

export default experience;
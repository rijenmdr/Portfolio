// schemas/profile.ts

import { defineField } from "sanity";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "headline",
        title: "Headline",
        type: "text",
        description: "In one short sentence, what do you do?",
      }),
      {
        name: "profileImage",
        title: "Profile Image",
        type: "image",
        description: "Upload a profile picture",
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
        name: "secondaryImage",
        title: "Secondary Image",
        type: "image",
        description: "Upload a secondary picture",
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
        name: "quote",
        title: "Quote",
        type: "text",
        rows: 4,
      },
      {
        name: "quoteBy",
        title: "Quote By",
        type: "string",
      },
      {
        name: "role",
        title: "Role",
        type: "string",
      },
      {
        name: "experience",
        title: "Experience",
        type: "number",
      },
      {
        name: "email",
        title: "Email Address",
        type: "string",
      },
      {
        name: "phoneNumber",
        title: "Phone Number",
        type: "string",
      },
      {
        name: 'dateOfBirth',
        title: 'Date of birth',
        type: 'date'
      },
      {
        name: "city",
        title: "City",
        type: "string",
      },
      {
        name: "country",
        title: "Country",
        type: "string",
      },
      {
        name: "resumeURL",
        title: "Upload Resume",
        type: "file",
      },
      {
        name: "socialLinks",
        title: "Social Links",
        type: "object",
        description: "Add your social media links:",
        fields: [
          {
            name: "github",
            title: "Github URL",
            type: "url",
            initialValue: "https://github.com/",
          },
          {
            name: "linkedin",
            title: "Linkedin URL",
            type: "url",
            initialValue: "https://linkedin.com/in/",
          },
          {
            name: "facebook",
            title: "Facebook URL",
            type: "url",
            initialValue: "https://facebook.com/",
          },
        ],
        options: {
          collapsed: false,
          collapsible: true,
          columns: 2,
        },
      },
  ],
};

export default profile;
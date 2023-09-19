import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: "document",
      name: "project",
      title: "Project",
      fields: [
        {
          type: "string",
          name: "title",
          title: "Title",
        },
        {
          type: "string",
          name: "role",
          title: "Role",
        },
        {
          type: "text",
          name: "description",
          title: "Description",
        },
        {
          type: "array",
          name: "skills",
          title: "Skills",
          of: [{ type: "string" }],
        },
        {
          type: "url",
          name: "deployedSiteLink",
          title: "Deployed Site Link",
        },
        {
          type: "array",
          name: "images",
          title: "Images",
          of: [{ type: "image" }],
        },
      ],
    },
  ],
};

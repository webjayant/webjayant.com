import { defineConfig } from "tinacms";
import { blog_postFields } from "./templates";
import { info_pageFields } from "./templates";
import { site_configFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d4060055-a22e-4104-bf2f-3a8e0deaaa5d", // Get this from tina.io
  token: "80284b0ea7290ed0994b03867c006edd375f5623", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Blog Posts",
        name: "blog_posts",
        path: "content/posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_postFields(),
        ],
      },
      {
        format: "yaml",
        label: "Author List",
        name: "author_list",
        path: "content/data",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        match: {
          include: "**/*",
        },
        fields: [{
            label: "Name",
            name: "name",
            type: "string",
          }, {
            label: "Avatar",
            name: "avatar",
            type: "image",
          }
        ],
      },
      {
        format: "json",
        label: "Info Page",
        name: "info_page",
        path: "content/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "info",
        },
        fields: [
          {
            type: "string",
            name: "description",
            label: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "cta",
            label: "cta",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "contact",
            label: "contact",
            fields: [
              {
                type: "string",
                name: "email",
                label: "email",
              },
              {
                type: "string",
                name: "twitter_handle",
                label: "twitter_handle",
              },
              {
                type: "string",
                name: "github_handle",
                label: "github_handle",
              },
            ],
          },
          {
            type: "string",
            name: "background_color",
            label: "background_color",
            ui: {
              component: "color",
            },
          },
        ],
      },
      {
        format: "json",
        label: "Site Info",
        name: "site_info",
        path: "content/data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "description",
            label: "description",
          },
          {
            type: "string",
            name: "repository_url",
            label: "repository_url",
          },
        ],
      },
    ],
  },
});

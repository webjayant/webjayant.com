import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      name: "author",
      label: "author",
      type: 'reference',
      collections: ['author_list']
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "hero_image",
      label: "hero image",
    },
  ] as TinaField[];
}
export function info_pageFields() {
  return [
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
  ] as TinaField[];
}
export function site_configFields() {
  return [
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
  ] as TinaField[];
}

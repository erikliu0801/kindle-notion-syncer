import { CreateDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

/** format generated by Readwise */
export const kindleDatabaseProperties: CreateDatabaseParameters["properties"] =
  {
    Title: {
      type: "title",
      title: {},
    },
    URL: {
      type: "url",
      url: {},
    },
    Author: {
      type: "rich_text",
      rich_text: {},
    },
    Category: {
      type: "select",
      select: {
        options: [
          {
            name: "Books",
            color: "orange",
          },
          {
            name: "Articles",
            color: "green",
          },
          {
            name: "Tweets",
            color: "blue",
          },
          {
            name: "Podcasts",
            color: "yellow",
          },
        ],
      },
    },
    "Full Title": {
      type: "rich_text",
      rich_text: {},
    },
    Highlights: {
      type: "number",
      number: {
        format: "number",
      },
    },
    "Last Synced": {
      type: "date",
      date: {},
    },
    "Last Highlighted": {
      type: "date",
      date: {},
    },
  } as const;
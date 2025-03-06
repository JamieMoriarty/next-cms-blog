// lib/storyblok.js
import { content, nestable } from "@/components/bloks";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    page: content.page,
    feature: nestable.feature,
    grid: nestable.grid,
    teaser: nestable.teaser,
  },
});

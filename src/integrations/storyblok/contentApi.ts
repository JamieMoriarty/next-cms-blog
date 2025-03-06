// lib/storyblok.js
import Page from "@/components/Page";
import Teaser from "@/components/Teaser";
import Grid from "@/components/Grid";
import Feature from "@/components/Feature";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
  },
});

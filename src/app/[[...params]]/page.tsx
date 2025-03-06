import { ISbStoriesParams, StoryblokClient } from "@storyblok/react";
import {
  getContentVersion,
  getStoryblokApi,
} from "@/integrations/storyblok/contentApi";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  const sbParams: ISbStoriesParams = {
    version: getContentVersion(),
  };
  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get(`cdn/stories/home`, sbParams);
}

import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { PageStoryblok } from "../../integrations/storyblok/contentModel";
import { BLokComponentProps } from "./props";

const PageBlok = ({ blok }: BLokComponentProps<PageStoryblok>) => (
  <main {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default PageBlok;

import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { PageStoryblok } from "../integrations/storyblok/contentModel";

interface PageProps {
  blok: PageStoryblok;
}

const Page = ({ blok }: PageProps) => (
  <main {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;

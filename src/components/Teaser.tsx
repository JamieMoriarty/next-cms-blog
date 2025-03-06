import { TeaserStoryblok } from "@/integrations/storyblok/contentModel";
import { storyblokEditable } from "@storyblok/react/rsc";

interface TeaserProps {
  blok: TeaserStoryblok;
}

const Teaser = ({ blok }: TeaserProps) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;

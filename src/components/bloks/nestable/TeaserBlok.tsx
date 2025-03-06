import { TeaserStoryblok } from "@/integrations/storyblok/contentModel";
import { storyblokEditable } from "@storyblok/react/rsc";
import { BLokComponentProps } from "../props";

const TeaserBlok = ({ blok }: BLokComponentProps<TeaserStoryblok>) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default TeaserBlok;

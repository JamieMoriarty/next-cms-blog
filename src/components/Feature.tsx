import { storyblokEditable } from "@storyblok/react/rsc";
import { FeatureStoryblok } from "../integrations/storyblok/contentModel";

interface FeatureProps {
  blok: FeatureStoryblok;
}
const Feature = ({ blok }: FeatureProps) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
);

export default Feature;

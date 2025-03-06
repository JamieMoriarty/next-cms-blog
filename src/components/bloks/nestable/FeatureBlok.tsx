import { storyblokEditable } from "@storyblok/react/rsc";
import { FeatureStoryblok } from "../../../integrations/storyblok/contentModel";
import { BLokComponentProps } from "../props";

const FeatureBlok = ({ blok }: BLokComponentProps<FeatureStoryblok>) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
);

export default FeatureBlok;

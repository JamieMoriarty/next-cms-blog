import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { GridStoryblok } from "../../../integrations/storyblok/contentModel";
import { BLokComponentProps } from "../props";

const GridBlok = ({ blok }: BLokComponentProps<GridStoryblok>) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default GridBlok;

import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { GridStoryblok } from "../integrations/storyblok/contentModel";

interface GridProps {
  blok: GridStoryblok;
}

const Grid = ({ blok }: GridProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;

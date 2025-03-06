import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { GridStoryblok } from "../../../integrations/storyblok/contentModel";
import { BLokComponentProps } from "../props";
import Grid from "@/components/views/grid/Grid";

const GridBlok = ({ blok }: BLokComponentProps<GridStoryblok>) => {
  return (
    <Grid {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok) => (
        <Grid.Column key={nestedBlok._uid}>
          <StoryblokServerComponent blok={nestedBlok} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default GridBlok;

import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

const Grid = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;

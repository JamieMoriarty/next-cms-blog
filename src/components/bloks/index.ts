import FeatureBlok from "./nestable/FeatureBlok";
import GridBlok from "./nestable/GridBlok";
import TeaserBlok from "./nestable/TeaserBlok";
import PageBlok from "./PageBlok";

export const content = {
  page: PageBlok,
};

export const nestable = {
  feature: FeatureBlok,
  grid: GridBlok,
  teaser: TeaserBlok,
};

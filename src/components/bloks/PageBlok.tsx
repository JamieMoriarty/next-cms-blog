"use client";

import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";
import { PageStoryblok } from "../../integrations/storyblok/contentModel";
import { BLokComponentProps } from "./props";
import { useRouter, usePathname } from "next/navigation";

const PageBlok = ({ blok }: BLokComponentProps<PageStoryblok>) => {
  const router = useRouter();
  const path = usePathname();
  if (path.length > 1 || path !== "/") {
    setTimeout(() => router.replace("/"), 0);
  }
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default PageBlok;

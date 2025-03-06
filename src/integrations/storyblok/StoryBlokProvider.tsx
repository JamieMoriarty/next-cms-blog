"use client";

import { getStoryblokApi } from "@/integrations/storyblok/contentApi";
import { ReactNode } from "react";

interface StoryblokProviderProps {
  children: ReactNode;
}
export default function StoryblokProvider({
  children,
}: StoryblokProviderProps) {
  getStoryblokApi();

  return <>{children}</>;
}

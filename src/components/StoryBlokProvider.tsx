"use client";

import { getStoryblokApi } from "@/lib/storyblok";
import { ReactNode } from "react";

interface StoryblokProviderProps {
  children: ReactNode;
}
export default function StoryblokProvider({
  children,
}: StoryblokProviderProps) {
  getStoryblokApi();
  return children;
}

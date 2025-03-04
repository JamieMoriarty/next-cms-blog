import type { NextConfig } from "next";

import createMDX from "@next/mdx";
import { remarkPlugins } from "./src/mdx/remark.mjs";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

const withMdx = createMDX({
  options: {
    remarkPlugins,
  },
});

export default withMdx(nextConfig);

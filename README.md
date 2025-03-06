This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses [StoryBlok](https://www.storyblok.com/) as CMS, and [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Steps to duplicate set up

### Scaffold a basic Next.js app

Follow the [official guide](https://nextjs.org/docs/app/getting-started/installation). At the time this meant:

```bash
npx create-next-app@latest
```

You'll see the following prompts, and

```
What is your project named? <name>
Would you like to use TypeScript? No / Yes (!)
Would you like to use ESLint? No / Yes (!)
Would you like to use Tailwind CSS? No (!) / Yes
Would you like your code inside a `src/` directory? No / Yes (!)
Would you like to use App Router? (recommended) No / Yes (!)
Would you like to use Turbopack for `next dev`?  No / Yes (!)
Would you like to customize the import alias (`@/*` by default)? No / Yes (!)
What import alias would you like configured? @/*
```

Choices made for this project have been highlighted with the `(!)`.

### Set-up StoryBlok integration

Follow [this guide](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-13-in-5-minutes), with the `Next 15` changes from [this repo README](https://github.com/storyblok/storyblok-react?tab=readme-ov-file#nextjs-using-app-router). A short version can be found below.

We skip the set-up on StoryBlok and focus on the code set-up. So, first install depencies:

```bash
npm install @storyblok/react
npm install --save-dev storyblok
```

This install both the storyblok CLI (used for generating types based on Blok definitions) and the React SDK.

Next we add a few integrations helpers (I placed them in `src/integrations/storyblok`, which is of course optional):

```typescript
//contentApi.ts

import { content, nestable } from "@/components/bloks";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {
    page: content.page,
    feature: nestable.feature,
    grid: nestable.grid,
    teaser: nestable.teaser,
  },
});
```

This sets up the content API integration. Note that it is required to pass `components` for all "bloks" defined in your StoryBlok space. The `NEXT_PUBLIC_SB_PREVIEW_TOKEN` environment variable contains an access token for StoryBlok with `preview` priveleges. This used for the integration with the visual editor, which is also why the environment variable name needs the `NEXT_PUBLIC_` prefix to be available in the browser bundle.

```typescript
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

  return children;
}
```

This is a top-level wrapper for Next.js rendered pages. Use in the root `layout.tsx` as the outer-most component and everything should be fine. Note the `"use client"` directive, to make it a client component. Again, this is to make the integration with the visual editor work (not quite sure of the details here, but I'm digging into it).

To get proper typing for the shape of content, use the storyblok CLI to generate type definitions (if the `install` instructions were followed it was installed above). You need to be logged in, but should only be required rarely:

```bash
npx storyblok login
```

To generate the typescript file containing Blok shapes add the following to `package.json["scripts"]` (remember to replace `<space-id>` and `/path/to/destination`):

```
"generate:storyblok_types": "storyblok pull-components --space <space-id> && storyblok generate-typescript-typedefs --sourceFilePaths ./components.<space-id>.json --destinationFilePath /path/to/destination"
```

You probably also want to exclude this generated file from your eslint config:

```javascript
const eslintConfig = [
  ...,
  [
    {
      ignores: ["/path/to/generate/file"],
    },
  ],
];
```

### Sentry configuration

WHEN you set the actual project, remember to add the Sentry configuration! To do that, use this thing:

```
npx @sentry/wizard@latest -i nextjs --saas --org chill-development --project javascript-nextjs
```

### Netlify configuration

## Running

### Local developments

The standard `dev` script has been added to the `package.json`;

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Content editing

To use the visual editor, we need a local https proxy. Follow the steps [here](https://www.storyblok.com/faq/setup-dev-server-https-proxy) to set up your local env and then run with the following command:

```
npx local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

Open [http://localhost:3010](http://localhost:3010) with your browser to see the result.

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://friendlyhomecare.pages.dev/",
  base: "/",
  trailingSlash: "always",
  build: {
    inlineStylesheets: "always",
  },
  redirects: {
    "/about-home-caregivers": "/about-us",
    "/in-home-senior-care-services": "/in-home-care-services",
    "/senior-companion-care": "/companion-care-services",
  },
});

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://friendlyhomecare.pages.dev/",
  base: "/",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "always",
  },
  redirects: {
    "/about-home-caregivers": "/about-us",
    "/in-home-senior-care-services": "/services/in-home-care",
    "/senior-companion-care": "/services/companion-care",
    "/senior-personal-care": "/services/personal-care",
    "/senior-live-in-overnight-care": "/services/live-in-and-overnight-care",
    "/chicago-caregivers-reviews": "/testimonials",
  },
});

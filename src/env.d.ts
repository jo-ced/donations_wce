/// <reference path="../.astro/types.d.ts" />

// Allow Alpine.js directives (x-*, @*, :*) on all HTML elements
declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    [key: string]: any;
  }
}

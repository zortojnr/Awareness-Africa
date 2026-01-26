I will replace the external Unsplash image URLs with local project images to resolve the `net::ERR_BLOCKED_BY_ORB` errors and ensure consistent styling.

**Files to Update:**
1.  **`components/HeroCarousel.tsx`**: Replace the 3 slide images.
2.  **`components/CoreValues.tsx`**: Replace the 6 value card images.
3.  **`pages/Home.tsx`**: Replace the background and impact images.

**Replacement Strategy:**
I will use the images available in `assets/images/` (e.g., `1.jpeg` through `22.jpeg`) to replace the Unsplash links. This ensures all assets are served locally and match the project's visual identity.

**Specific Replacements:**

*   **HeroCarousel:**
    *   Slide 1: `assets/images/20.jpeg` (General Awareness)
    *   Slide 2: `assets/images/3.jpeg` (HerAwareness)
    *   Slide 3: `assets/images/8.jpeg` (MenForward - *using a workshop image as a placeholder for men's initiative*)

*   **CoreValues:**
    *   Education: `assets/images/13.jpeg`
    *   Equity: `assets/images/4.jpeg`
    *   Humanity: `assets/images/15.jpeg`
    *   Prevention: `assets/images/11.jpeg`
    *   Leadership: `assets/images/18.jpeg`
    *   Inclusion: `assets/images/22.jpeg`

*   **Home:**
    *   Background: `assets/images/10.jpeg`
    *   Impact Image: `assets/images/16.jpeg`

This plan removes the dependency on external image hosting, which is causing the network errors.
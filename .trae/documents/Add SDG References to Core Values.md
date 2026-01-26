I will add the requested SDG reference lines to `components/CoreValues.tsx`.

**Plan:**
1.  **Update Data Structure:** I will add an `sdg` property to each object in the `VALUES` array. This property will contain the specific SDG string(s) requested for each core value.
2.  **Render SDG Line:** In the JSX mapping, I will insert a new `<div>` or `<p>` element directly under the `<h3>` title.
    *   **Styling:** The text will be styled as `font-bold` and `uppercase` (or similar "very bold" styling) to meet the requirement.
    *   **Placement:** It will be placed inside the existing `div.p-10.flex-grow`, right after the title and before the description paragraph.
    *   **Interaction:** I will ensure it inherits the `group-hover:text-white` transition so it remains readable when the card background changes color on hover, matching the existing behavior.

**SDG Mapping to Implement:**
*   **Education as Empowerment:** "SDG 4: Quality Education"
*   **Gender Equity & Protection:** "SDG 5: Gender Equality"
*   **Humanity & Dignity:** "SDG 3: Good Health and Well-Being"
*   **Awareness for Prevention:**
    *   "SDG 3: Good Health and Well-Being"
    *   "SDG 4: Quality Education"
*   **Youth-Driven Leadership:**
    *   "SDG 8: Decent Work and Economic Growth"
    *   "SDG 16: Peace, Justice, and Strong Institutions"
*   **Inclusion & Safe Spaces:**
    *   "SDG 10: Reduced Inequalities"
    *   "SDG 16: Peace, Justice, and Strong Institutions"

This change is purely additive within the existing card structure and adheres to all constraints (no layout changes, no rewriting, etc.).
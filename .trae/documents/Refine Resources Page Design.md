I will update the `pages/Resources.tsx` page to look more professional while maintaining the existing content structure, as requested.

**Design Goals:**
*   **Professional Look:** Clean typography, sharp borders, better spacing, and high-contrast elements.
*   **Maintain Content:** Keep the existing sections (Categories, Institutional Documents, etc.).
*   **"Hidden Line" / "Thin but Bold" Aesthetic:** Use subtle but distinct borders (`border-b`, `border-l`) and refined typography (bold tracking) to create a structured, "architectural" feel.

**Specific Changes:**
1.  **Hero Section:** Make it more minimal but authoritative. Use a very subtle background tint or pattern to distinguish it.
2.  **Categories Sidebar:** Redesign the buttons to be cleaner, perhaps with a left-border active state style rather than just text.
3.  **Document List:**
    *   Increase padding (`p-8`).
    *   Use sharper borders.
    *   Make the "Download" interaction more subtle and professional (e.g., a button that appears on hover).
    *   Ensure the "Date" and "Title" typography creates a clear hierarchy.

**Implementation Plan:**
I will rewrite the `Resources.tsx` component to apply these styles. The core data (the list of documents and categories) will remain the same, but the wrapper classes will be updated to reflect the "Professional" and "Thin but Bold" directive. I'll use `slate-900` for deep contrast and `slate-200` for the "thin" lines.
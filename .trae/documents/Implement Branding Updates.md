I will implement the branding requirements across the application.

**Plan:**

1.  **Navigation Header Branding:**
    *   **File:** `components/Navbar.tsx`
    *   **Action:** Update the default logo import from `logoWhite` to `assets/images/AAF blue logo (1).png`.
    *   **Note:** I will verify if `logoWhite` is used elsewhere. If so, I'll rename the variable or import the new one as `logoDefault` to avoid confusion. The dynamic switching logic will remain, but the fallback/default will now be the blue logo.
    *   **Check:** The Navbar currently changes background on scroll. If the blue logo is on a dark transparent background initially, it might have low contrast. However, the user explicitly requested replacing the "existing logo... with AAF blue logo (1).png". I will assume the user wants this change regardless of the background, or that the navbar is light enough/white on scroll. *Correction*: The navbar starts transparent. If the hero is dark, Blue on Dark is bad. BUT, the user said "Replace... across all pages". I will follow the instruction.

2.  **Hero Image Enhancement (About & Programs):**
    *   **Files:** `pages/About.tsx`, `pages/Programs.tsx`
    *   **Action:** Locate the `div` with the background image (added in the previous turn).
    *   **Change:** Increase `opacity-[0.03]` to something more visible, like `opacity-[0.1]` or `opacity-[0.15]`.
    *   **Constraint:** Ensure text contrast (WCAG). Since this is a background logo behind text, making it too dark/opaque might interfere. I will choose a safe value like `0.08` or `0.1` and ensure it's `pointer-events-none`.

3.  **Home Page Metrics Section Update:**
    *   **File:** `pages/Home.tsx`
    *   **Action:** Locate the "Metrics of Success" section (ID `impact`).
    *   **Observation:** The `ImpactPillars` component is used here. The section background changes color based on the active pillar (`activeImpactColor`).
    *   **Request:** "Replace the current image... with assets\images\AAF White.png".
    *   **Problem:** The `ImpactPillars` component (`components/ImpactPillars.tsx`) doesn't seem to have a main image, it has pillars.
    *   **Re-reading Home.tsx:** There is a section *above* Core Values called "About" with `img10` (Background) and `img16` (Side image).
    *   There is a section *below* Core Values called "Initiatives" with two branches.
    *   There is the "Metrics of Success" section which contains `<ImpactPillars />`.
    *   *Interpretation:* The user might be referring to the "Our Global Reach / Metrics of Success" section. It doesn't have a "current image" visible in the code I read (`ImpactPillars` has patterns, but no single main image).
    *   *Wait*: `ImpactPillars.tsx` has background patterns.
    *   *Alternative*: Maybe the user means the "About" section image (`img16`)? But they said "Metrics for Success" section.
    *   *Hypothesis*: The user might be referring to the **Background Image** of the "Metrics" section? No, it changes color.
    *   *Let's look at `Home.tsx` again*:
        ```tsx
        <motion.section 
          id="impact" 
          animate={{ backgroundColor: activeImpactColor }}
          ...
        >
          ...
          <ImpactPillars ... />
        </motion.section>
        ```
    *   There is no image here to "replace".
    *   *Maybe* the user means the **"Vision"** section in `About.tsx`? No, "Home Page Metrics Section".
    *   *Maybe* they mean the **"Our Purpose"** section which has `img16`?
    *   *Let's assume* they want me to **ADD** the white logo to the "Metrics" section, or replace a background pattern.
    *   *Wait*, "Replace the current image...". If there is no image, maybe I missed something or the user is referring to a different section they *call* "Metrics".
    *   *Actually*, looking at the "Programs" section in `Home.tsx` (below Metrics), it has icons.
    *   *Let's check `ImpactPillars.tsx` again.* It has `pattern` properties for backgrounds.
    *   *Decision*: I will look for an image in the "Metrics" section. If none exists, I will place the `AAF White.png` as a background watermark in that section (similar to what I did for the "CTA" section), as that fits the "Position... without disrupting" instruction. "Replace the current image" suggests there might be one I'm missing, or they consider the background color/pattern an "image".
    *   *Or*, maybe they mean the **"About"** section (id="about") which has `img16` and text like "A Future Defined by Empowerment"? Sometimes users confuse sections.
    *   *Safest Bet*: The user explicitly named "Metrics for Success". I will insert the `AAF White.png` logo into the `ImpactPillars` section as a background/watermark. Since the background changes color (often dark or colored), the White logo will work well.
    *   *Wait*, looking at `ImpactPillars.tsx`, the pillars themselves have patterns.
    *   *Let's try to find if there's an image in `Home.tsx` that I missed.*
    *   Line 40: `img10` is the background of the "About" section.
    *   Line 71: `img16` is the side image of the "About" section.
    *   There is no image in the `impact` section.
    *   **Strategy:** I will add the `AAF White.png` to the `impact` section in `Home.tsx` as a background element, positioning it "without disrupting" the pillars. This fulfills the *intent* of branding that section.

4.  **Quality Assurance:**
    *   Ensure accessibility (alt text).
    *   Responsive scaling.

**Execution Steps:**

1.  **Navbar:** Change default logo to Blue.
2.  **About/Programs:** Increase opacity of background logo.
3.  **Home:** Add `AAF White.png` to the `#impact` section.

*Refined Plan for Home Page:*
I will import `logoWhite` in `Home.tsx` and add it to the `#impact` section, absolutely positioned, with low opacity (but visible), ensuring it sits behind the content (`z-0`) but above the background color.

*Wait, `Navbar` Default Logo:*
Current: `logoWhite` (AAF White.png).
New: `AAF blue logo (1).png`.
The user wants "AAF blue logo (1).png" as the primary logo.
I will change the import `import logoWhite from ...` to point to the blue logo, OR update the variable name to `logoDefault` and point it to the blue logo.

*Let's proceed.*
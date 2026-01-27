I will strictly implement the "Founder's Statement" and "Programs" sections into the MenForward Africa page, adhering to the "Strict Execution Mode" guidelines provided.

**Plan:**

1. **Modify** **`pages/InitiativeDetail.tsx`** **(MenForwardPage Component):**

   * **Section 1: Founder's Statement:**

     * **Location:** Insert *before* the "Metrics of Reality" section (which is titled "The Silence Crisis" in the code).

     * **Content:**

       * Title: "Founder’s Statement"

       * Intro: "MenForward Africa was born from a deeply personal and urgent realization: While conversations around mental health are gradually gaining visibility in Africa, men are still largely left behind."

       * Quote: “In Nigeria and the continent, men are raised to be strong, silent, and self-sufficient... (full text)”

     * **Design:** Use existing typography (uppercase tracking for label, display font for body). No new icons. Subtle fade-in animation (`opacity: 0` -> `1`).

   * **Section 2: Programs:**

     * **Location:** Insert *after* the "Metrics of Reality" section.

     * **Content:** Four distinct program areas:

       1. Digital Peer Support Circles
       2. MenForward Talks
       3. Youth Mental Health Education
       4. Advocacy & Awareness Campaigns

     * **Design:** Use a clean grid layout (1 col mobile, 2 col desktop) matching existing "Proposed Roles" or similar list structures. Sequential fade-in for items. No decorative cards, just clean typography and spacing.

2. **Implementation Details:**

   * I will use the existing `SectionDivider` component between these new sections to maintain the page's rhythm.

   * I will reuse the `revealProps` or similar Framer Motion variants to ensure consistent, restrained animation.

3. **Verification:**

   * Check for responsiveness (stacking on mobile).

   * Ensure no layout shifts or "hover theatrics".

4. **Push:**

   * Commit and push to `main`.


I will build the Admin Dashboard as a functional, secure, and professional interface accessible at `/admin`.

**Architecture & Technology Strategy:**
Since there is no dedicated backend server, I will implement a **Client-Side Persistence Layer** using `localStorage` wrapped in a service module (`adminService.ts`). This ensures the dashboard is "functional" and retains data (inquiries, content changes, analytics) across sessions on the same device, satisfying the requirement for "no dummy data".

**Implementation Plan:**

1.  **Service Layer (`services/adminService.ts`):**
    *   **Auth System:** Implement secure login logic with the provided credentials (`info@awarenessafrica.org` / `victoriaodesanya`). Session management via tokens.
    *   **Database Simulation:** Methods to save/retrieve inquiries, track page views (analytics), and manage site content.
    *   **Analytics:** Auto-track user visits to generate "Monthly Remarks".

2.  **Admin Routes & Pages:**
    *   **`/admin` (Login):** Minimal, secure login page.
    *   **`/admin/dashboard` (Overview):** Metrics overview (Total Inquiries, Monthly Visitors).
    *   **`/admin/inquiries`:** Data table of all submitted forms. Includes **CSV Export** functionality.
    *   **`/admin/content`:** CMS interface to edit key text on the website (starting with Home Page Hero content to demonstrate capability).

3.  **Main Application Integration:**
    *   **Tracking:** Inject a tracking hook into `App.tsx` to count real-time visitors.
    *   **Contact Form:** Refactor `pages/Contact.tsx` to be fully functional, sending data to our `adminService` instead of being static.

4.  **UI/UX Design:**
    *   Build a responsive `AdminLayout` with a sidebar and top bar.
    *   Use a "Calm, Professional" aesthetic (Slate/Gray palette, clean typography).
    *   Ensure strict access control (redirect unauthenticated users).

**Execution Steps:**
1.  Create the `adminService` (Backend logic).
2.  Create the `Login` page.
3.  Create the `AdminLayout` and `Overview` page.
4.  Create the `Inquiries` page with CSV export.
5.  Update `App.tsx` with routes and tracking.
6.  Connect the public `Contact` form to the system.

This approach delivers a working, testable Admin Dashboard that tracks real user actions and manages content.
I will fix the import error in `pages/InitiativeDetail.tsx`.

**Problem:** The file tries to import `1.jpeg`, but the file in the `assets/images` directory is named `1a.jpeg`.

**Fix:**
1.  Update `pages/InitiativeDetail.tsx` to import `1a.jpeg` instead of `1.jpeg`.
2.  This should resolve the `net::ERR_ABORTED` error and allow the page to load correctly.
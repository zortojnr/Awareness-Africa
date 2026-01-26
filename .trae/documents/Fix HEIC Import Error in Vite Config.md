I will fix the HEIC file import error by updating the Vite configuration to treat `.HEIC` files as static assets.

**Steps:**

1. **Update** **`vite.config.ts`**: Add `assetsInclude: ['**/*.HEIC']` to the configuration object. This tells Vite to treat these files as static assets (like PNGs or JPEGs) instead of trying to parse them as code.
2. **Restart Server**: Restart the development server to ensure the new configuration is applied.


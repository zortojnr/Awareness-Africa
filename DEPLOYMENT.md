# Deployment Configuration for SEO

## Server Configuration for BrowserRouter

Since the application now uses `BrowserRouter` instead of `HashRouter` for SEO-friendly URLs, your server must be configured to redirect all routes to `index.html`. This ensures that React Router can handle client-side routing.

### For Vercel

Create a `vercel.json` file in the root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }                                                                                                                                                                                                                                              
  ]
}
```

### For Netlify

Create a `_redirects` file in the `public` folder:

```
/*    /index.html   200
```

Or create a `netlify.toml` in the root:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### For Apache (.htaccess)

Create a `.htaccess` file in the `public` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### For Nginx

Add to your nginx configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## SEO Configuration

1. **Update Domain**: Edit `config/seo.config.ts` and update the `baseUrl` with your actual domain name.

2. **Update Sitemap**: Edit `public/sitemap.xml` and replace `https://awarenessafrica.org` with your actual domain.

3. **Update Robots.txt**: Edit `public/robots.txt` and replace `https://awarenessafrica.org` with your actual domain.

## Google Search Console Setup

After deployment:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership
4. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
5. Request indexing for important pages

## Testing SEO

- Test structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
- Test mobile-friendliness: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Test page speed: [PageSpeed Insights](https://pagespeed.web.dev/)
- Test Open Graph: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Test Twitter Cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)

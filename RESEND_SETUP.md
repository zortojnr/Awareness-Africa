# Resend API Setup Instructions

## Overview
The contact form now sends inquiries to `info@awarenessafrica.org` using the Resend API.

## Setup Steps

### 1. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

#### For Vercel Deployment:
1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add: `RESEND_API_KEY` = `your_api_key_here`

#### For Local Development:
Create a `.env` file in the root directory:
```
RESEND_API_KEY=re_your_api_key_here
VITE_API_URL=http://localhost:3000/api/send-email
```

### 3. Verify Domain (Important!)
1. In Resend dashboard, go to Domains
2. Add `awarenessafrica.org` as your domain
3. Follow DNS setup instructions to verify domain ownership
4. This is required for sending emails from `noreply@awarenessafrica.org`

### 4. Alternative: Use Resend's Test Domain
If you haven't verified your domain yet, you can use Resend's test domain:
- Change `from` email in `api/send-email.ts` to: `onboarding@resend.dev`
- Note: This is only for testing. Production requires domain verification.

## API Endpoint

The API endpoint is located at `/api/send-email.ts` and handles:
- POST requests with contact form data
- Sends formatted email to `info@awarenessafrica.org`
- Returns success/error response

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check `info@awarenessafrica.org` inbox for the inquiry email
4. Check browser console for any errors

## Troubleshooting

- **401 Unauthorized**: Check that `RESEND_API_KEY` is set correctly
- **Domain not verified**: Verify your domain in Resend dashboard
- **CORS errors**: Ensure API endpoint is properly configured
- **Email not received**: Check spam folder and Resend dashboard logs

## Production Checklist
- [ ] Resend API key is set in production environment
- [ ] Domain `awarenessafrica.org` is verified in Resend
- [ ] API endpoint is accessible at `/api/send-email`
- [ ] Test email sending works correctly
- [ ] Error handling is working properly

// Email service for sending contact form inquiries via Resend API
// COMMENTED OUT - Resend API key not available yet
// TODO: Uncomment when Resend API key is configured

/*
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const emailService = {
  // Send contact form inquiry to info@awarenessafrica.org
  // @param data Contact form data
  // @returns Promise with success status
  sendInquiry: async (data: ContactFormData): Promise<{ success: boolean; error?: string }> => {
    try {
      // Determine API endpoint based on environment
      // For Vercel: /api/send-email
      // For local dev: set VITE_API_URL in .env
      const apiUrl = import.meta.env.VITE_API_URL || '/api/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message || '',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return { success: true };
    } catch (error: any) {
      console.error('Error sending email:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to send inquiry. Please try again later.' 
      };
    }
  },
};
*/

// Placeholder export to prevent import errors
export const emailService = {
  sendInquiry: async () => ({ success: false, error: 'Resend API not configured' })
};

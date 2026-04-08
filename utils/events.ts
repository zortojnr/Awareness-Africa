
/**
 * Global event system for application-wide triggers
 * This prevents circular dependencies between App.tsx and its children
 */

export const openInvolvementModal = () => {
  window.dispatchEvent(new CustomEvent('open-involvement-modal'));
};

export const openCertificateModal = () => {
  window.dispatchEvent(new CustomEvent('open-certificate-modal'));
};

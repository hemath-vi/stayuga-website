/**
 * Single source of truth for public contact details.
 *
 * These were previously hardcoded in several components and had already
 * drifted — the header dialled a placeholder number while the footer showed
 * the real one. Import from here instead of retyping.
 */

export const CONCIERGE_TEL = "+918121933639";
export const CONCIERGE_TEL_DISPLAY = "+91 81219 33639";
export const CONCIERGE_EMAIL = "stayuga.official@gmail.com";

export const INSTAGRAM_URL = "https://www.instagram.com/stayuga/";
export const WHATSAPP_URL = `https://wa.me/${CONCIERGE_TEL.replace(/[^\d]/g, "")}`;
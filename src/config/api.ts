/// <reference types="vite/client" />

/**
 * Centralized API configuration helper for Frontend & Backend separation.
 * In development or monolithic deployment, VITE_API_BASE_URL is empty, so endpoints use relative paths (/api/*).
 * When frontend is deployed separately (e.g. Vercel), set VITE_API_BASE_URL=https://your-backend-domain.com
 */
const env = (import.meta as unknown as { env?: Record<string, string> }).env;
const API_BASE_URL = (env?.VITE_API_BASE_URL || '').replace(/\/$/, '');

export const getApiUrl = (endpoint: string): string => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

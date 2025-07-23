export const API_CONFIG = {
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    TTL: (import.meta.env.VITE_API_TTL_MINUTES || 5)  * 60 * 1000,
    ENDPOINTS: {
        PROGRESS_CARDS: '/progress_cards',
        FEATURE_CARDS: '/feature_cards'
    }
}

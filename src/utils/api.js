import { getItemWithTTL, setItemWithTTL } from "./localStorage"

const API_URL = import.meta.env.VITE_API_URL
const TTL = import.meta.env.VITE_API_TTL_MINUTES * 60 * 1000

async function apiCall(path) {

    const cachedResponse = getItemWithTTL(path)

    // Cache hit
    if (cachedResponse) {
        return cachedResponse
    }

    // Cache miss
    const response = await fetch(API_URL + path)
    const data = await response.json()

    setItemWithTTL(path, data, TTL)

    return data
}

export const getProgressCards = async () => {
    return apiCall('/progress_cards')
}

export const getFeatureCards = async () => {
    return apiCall('/feature_cards')
}

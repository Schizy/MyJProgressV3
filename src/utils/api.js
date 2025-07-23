import { getItemWithTTL, setItemWithTTL } from "./localStorage"
import { API_CONFIG } from "../config/api.config"

const { API_URL, TTL, ENDPOINTS } = API_CONFIG

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
    return apiCall(ENDPOINTS.PROGRESS_CARDS)
}

export const getFeatureCards = async () => {
    return apiCall(ENDPOINTS.FEATURE_CARDS)
}

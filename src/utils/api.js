import { getItemWithTTL, setItemWithTTL } from "./localStorage"

const API_URL = 'http://localhost:8000/api'
const TTL = 5 * 60 * 1000 // 5min

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

import { getItem, setItem } from "./localStorage"

const API_URL = 'http://localhost:8000/api'
const TTL = 5 * 60 * 1000 // 5min

async function apiCall(path) {

    const cachedResponse = getItem(path)
    const cacheTTL = getItem(path + '_ttl')

    // Cache hit
    if (cachedResponse && cacheTTL > Date.now()) {
        return cachedResponse
    }

    // Cache miss
    const response = await fetch(API_URL + path)
    const data = await response.json()

    setItem(path, data)
    setItem(path + '_ttl', Date.now() + TTL)

    return data
}

export const getProgressCards = async () => {
    return apiCall('/progress_cards')
}

export const getFeatureCards = async () => {
    return apiCall('/feature_cards')
}

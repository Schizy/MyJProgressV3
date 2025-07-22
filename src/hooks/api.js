const API_URL = 'http://localhost:8000/api'

async function fetchJson(path) {
    const response = await fetch(API_URL + path)

    return await response.json()
}

export const getProgressCards = async () => {
    return fetchJson('/progress_cards')
}

export const getFeatureCards = async () => {
    return fetchJson('/feature_cards')
}

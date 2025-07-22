const API_URL = 'http://localhost:8000/api'

export const getProgressCards = async () => {
    return fetch(`${API_URL}/progress_cards`).then(response => response.json())
}

export const getFeatureCards = async () => {
    return fetch(`${API_URL}/feature_cards`).then(response => response.json())
}

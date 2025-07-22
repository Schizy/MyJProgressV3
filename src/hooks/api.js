const API_URL = 'http://localhost:8000/api'

// TODO: incorporer le cache ici
// Au lieu d'utiliser le local storage state dans le component
// Ca doit etre transparent
// Je local storage la data + un key_ttl
// Avec Date.now() + ttl
// Et à chaque re-render je check Date.now() < timestamp
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

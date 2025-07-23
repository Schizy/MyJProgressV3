const TTL_suffix = '_ttl'


export function getItem(key) {
    try {
        const item = window.localStorage.getItem(key)

        return item ? JSON.parse(item) : null
    } catch (err) {
        console.error(err)
    }
}

export function setItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
        console.error(err)
    }
}

export function getItemWithTTL(key) {
    const item = getItem(key)
    const ttl = getItem(key + TTL_suffix)

    return item && ttl > Date.now() ? item : null
}

export function setItemWithTTL(key, value, ttl) {
    setItem(key, value)
    setItem(key + TTL_suffix, Date.now() + ttl)
}


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

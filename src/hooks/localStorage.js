import { useEffect, useState } from "react"

export const useLocalStorageState = function (key, initialValue) {
    const [value, setValue] = useState(getItem(key) || initialValue)

    useEffect(() => {
        setItem(key, value)
    }, [value])

    return [value, setValue]
}

function getItem(key) {
    try {
        const item = window.localStorage.getItem(key)

        return item ? JSON.parse(item) : null
    } catch (err) {
        console.error(err)
    }
}

function setItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
        console.error(err)
    }
}

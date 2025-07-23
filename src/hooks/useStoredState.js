import { useEffect, useState } from "react"
import { getItem, setItem } from "../utils/localStorage"

function useStoredState(key, initialValue) {
    const [value, setValue] = useState(getItem(key) || initialValue)

    useEffect(() => {
        setItem(key, value)
    }, [value])

    return [value, setValue]
}

export default useStoredState

import { useState, useEffect } from "react"


export default function useLocalStorage(key: any, defaultValue: any) {
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined') {
            const jsonValue: any = localStorage.getItem(key)
            if (jsonValue != null) return JSON.parse(jsonValue)

            if (typeof defaultValue === "function") {
                return defaultValue()
            } else {
                return defaultValue
            }
        }
    })
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value))
        }
}, [key,value])

    return [value, setValue]
}
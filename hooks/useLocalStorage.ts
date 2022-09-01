import { useState, useEffect } from "react"


export default function useLocalStorage(key: any, defaultValue: any) {
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined') {
            const jsonValue: string | null = localStorage.getItem(key)
            // @ts-ignore
            if (jsonValue != null | undefined) return JSON.parse(jsonValue)

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
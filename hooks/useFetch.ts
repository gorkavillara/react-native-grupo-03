import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"

export const useFetch = <T>(url: string) => {
// export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<AxiosError | null>(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}

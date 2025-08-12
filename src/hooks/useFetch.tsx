import { useEffect, useState } from "react"
import { api } from "../api"


interface IParams {
    limit: number,
    skip: number
}

export const useFetch = <T,>(entpoint: string, params?:IParams) => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        api
            .get(entpoint, {params})
            .then((res) => setData(res.data))
            .catch((err) => setError(err)) 
            .finally(() => setLoading(false))
    }, [entpoint, JSON.stringify(params)])

    return {data, error, loading}

}
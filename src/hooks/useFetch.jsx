import { useEffect, useState } from "react"
import { api } from "../api";

export const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        api
            .get(endpoint)
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return {data, loading, error}
}
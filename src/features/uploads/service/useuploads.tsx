import { useMutation } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const useUplaodFile = () => {

    const uploadFile = useMutation<any, any, any>({
        mutationFn: (body) => api.post("doctor/add_files", body).then(res => res.data),
    })

    return {uploadFile}
}
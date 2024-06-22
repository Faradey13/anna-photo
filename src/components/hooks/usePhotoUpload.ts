import {useEffect, useState} from "react";
import {IPhoto} from "./type.ts";
import $api from "../../config/axios.ts";
import {AxiosResponse} from "axios";


export const usePhotoUpload =  (type: string) => {
    const [photos, setPhoto] = useState<IPhoto[]>([]);
    const [error, setError] = useState(true);

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const response: AxiosResponse<IPhoto[]> = await $api.post(`/photo/${type}`);
                if (isMounted) {
                    setPhoto(response.data);
                }
            } catch (err: any) {
                if (isMounted) {
                    setError(err.message || 'Ошибка при загрузке данных');
                }
            }
        };
         fetchData()
        return () => {
            isMounted = false; 
        };


    },[])
    return {photos, error}
}
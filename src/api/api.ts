import {API_BASE_URL} from "./constants"
import axios from 'axios'


export default class Api {

    public url: string;
    public $Client: any
    public $AuthClient: any


    constructor(
        url: string,
    ) {
        this.url = `${API_BASE_URL}${url}`

        this.$Client = axios.create({
            baseURL: this.url,
        })

        this.$AuthClient = axios.create({
            withCredentials: true,
            baseURL: this.url,
        })

        this.$AuthClient.interceptors.request.use(
            (config: {
                headers: {
                    Authorization: string;
                    AccessControlAllowOrigin: any;
                };
            }) => {
                config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

                return config;
            }
        )
        this.$AuthClient.interceptors.response.use((config: any) => {
            return config;
        }, async (error: any) => {
            const originalRequest = error.config;
            if (error.response.status == 401 && error.config && !error.config._isRetry) {
                originalRequest._isRetry = true;
                try {
                    const response = await axios.get(`${API_BASE_URL}/user/refresh`, {withCredentials: true})
                    localStorage.setItem('token', response.data.accessToken);
                    return this.$AuthClient.request(originalRequest);
                } catch (e) {
                    console.log('НЕ АВТОРИЗОВАН')
                }
            }
            throw error;
        })
    }
}


import { AxiosInstance } from 'axios';
import Vuetify from "~/plugins/vuetify";

declare module '#app' {
    interface NuxtApp {
        $axios: AxiosInstance;
        $vuetify: Vuetify
    }
}

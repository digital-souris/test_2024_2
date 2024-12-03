import axios from 'axios';

export default defineNuxtPlugin(() => {
    // Создайте экземпляр axios с базовой конфигурацией
    const axiosInstance = axios.create({
        baseURL: 'https://www.thecocktaildb.com', // Замените на ваш базовый URL
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Доступ к axios через nuxtApp
    return {
        provide: {
            axios: axiosInstance,
        },
    };
});

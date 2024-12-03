import { defineStore } from 'pinia';
import type {Drink} from "~/interfaces/drink.interface";

// Пример состояния
export const useDrinkStore = defineStore('drink', () => {
    // Состояние
    const types: Ref<string[]> = ref(['margarita', 'mojito', 'a1', 'kir']);
    const loading: Ref<boolean> = ref(false);
    const drinkData: Ref<{[key: string]: Drink[]}> = ref({})
    const getTypeByName = (name?: string): string | null => {
        if (!name) return types.value[0]
        if (types.value.includes(name)) return name
        return null
    }

    const loadDrinkData =  async (name:string) => {
        if (!getTypeByName(name) || getDrinkDataByName(name)) return
        const { $axios } = useNuxtApp();
        try {
            setLoading(true)
            const resp = await $axios.get(`/api/json/v1/1/search.php?s=${name}`)
            if(resp.status === 200) {
                drinkData.value[name] = resp.data.drinks
            }
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setLoading(false)
        }
    }

    const getDrinkDataByName = (name: string): Drink | undefined => {
        return drinkData.value[name]
    }
    const setLoading = (val: boolean): void => {
        loading.value = val
    }

    const isFirstMenuIndex = (name: string): boolean => {
        return types.value.indexOf(name) === 0
    }


    // Возвращаем состояние и методы
    return {
        getTypeByName,
        loading,
        types,
        isFirstMenuIndex,
        loadDrinkData,
        getDrinkDataByName
    };
});

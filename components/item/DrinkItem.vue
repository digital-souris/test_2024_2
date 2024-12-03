<script setup lang="ts">
import type {Drink} from "~/interfaces/drink.interface";

const {drink} = defineProps<{ drink: Drink }>()

const getMaxIngredientIndex = (keyVal: string): number =>  {
  const ingredientKeys = Object.keys(drink)
      .filter(key => key.startsWith(keyVal))
      .map(key => parseInt(key.replace(keyVal, ""), 10)); // Извлекаем числовую часть ключа и преобразуем в число

  // Находим максимальный индекс
  return Math.max(...ingredientKeys);
}
</script>

<template>
  <v-row class="flex-column-reverse flex-sm-row">
    <v-col cols="12" md="6">
      <div>
        <h2 >
          {{ drink.strDrink }}

        </h2>
        <h4>{{ drink.strCategory }}</h4>
        <h4>{{drink.strAlcoholic}}</h4>
        <h4>{{drink.strGlass}}</h4>
        <h3>Instructions:</h3>
        <p>{{drink.strInstructions}}</p>
      </div>
    </v-col>
    <v-col cols="12" md="6" class="justify-center d-flex justify-sm-end">
      <v-img class=" pl-3 pt-3 pb-3" v-if="drink.strDrinkThumb" :lazy-src="drink.strDrinkThumb"
             :src="drink.strDrinkThumb" width="100%" :max-width="300"/>
    </v-col>
    <v-col cols="12">
      <h2>List of ingridients:</h2>
      <template v-for="index in getMaxIngredientIndex('strMeasure')">
        <v-row  :key="index" v-if="drink[`strIngredient${index - 1}`] || drink[`strMeasure${index - 1}`]">
          <v-col md="4">{{drink[`strIngredient${index - 1}`] }} {{index}}</v-col>
          <v-col md="4">{{drink[`strMeasure${index - 1}`] }}</v-col>

        </v-row>
      </template>

    </v-col>
  </v-row>
</template>

<style scoped>

</style>

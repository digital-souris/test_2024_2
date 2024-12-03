<script setup lang="ts">
  import {useDrinkStore} from "~/store/drink";
  import {useRoute} from "#vue-router";
  import DrinkItem from "~/components/item/DrinkItem.vue";

  const {getTypeByName, loadDrinkData, getDrinkDataByName, loading} = useDrinkStore()
  const route = useRoute()
  const getType = getTypeByName(route.params?.page)
  onMounted(() => {
    if(getType && !getDrinkDataByName(getType)) {
      loadDrinkData(getType)
    }
  })
  const drinkData = computed(() => getDrinkDataByName(getType))
</script>

<template>
  <page-not-found v-if="!getType"/>
  <template v-else>
    <v-progress-linear v-if="loading" indeterminate/>
    <v-container>
      <drink-item :drink="drink" :key="index" v-for="(drink, index) in drinkData"/>
    </v-container>
    </template>
</template>

<style scoped>

</style>

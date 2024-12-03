<script setup lang="ts">
import {useDrinkStore} from "~/store/drink";

const sidebarOpen = ref(true)
const {types, isFirstMenuIndex} = useDrinkStore()
const isDesktop = ref(false);
const updateIsDesktop = () => {
  isDesktop.value = window.innerWidth >= 1024;
};
onMounted(() => {
  updateIsDesktop()
  window.addEventListener('resize', updateIsDesktop);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsDesktop);
});

</script>

<template>
  <v-app-bar app v-if="!isDesktop">
    <v-app-bar-nav-icon @click="sidebarOpen = !sidebarOpen"/>
  </v-app-bar>
  <v-navigation-drawer
      v-model:model-value="sidebarOpen"
      app
      :width="300"
      :permanent="isDesktop"
      :temporary="!isDesktop"
  >
    <v-list>
      <v-list-item :to="`${isFirstMenuIndex(item) ? '/' : `/${item}`}`" :link="true" v-for="item in types" :key="item">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>

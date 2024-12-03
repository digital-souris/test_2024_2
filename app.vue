<template>
  <v-app>
    <sidebar-layout/>
    <v-main>
      <nuxt-page/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import SidebarLayout from "~/components/layouts/SidebarLayout.vue";
</script>

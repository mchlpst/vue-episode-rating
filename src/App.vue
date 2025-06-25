<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <Suspense>
    <main class="page">
      <RouterView />
    </main>
  </Suspense>
</template>

<style scoped></style>

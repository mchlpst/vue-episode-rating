<template>
  <span>
    <StarIcon
      v-for="index in 5"
      :key="index"
      :star-shine="index <= numericRating" />
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
import StarIcon from "./StarIcon.vue";

interface Props {
  rating: string;
}

const props = defineProps<Props>();

const numericRating = computed(() => {
  if (props.rating === "N/A") return 0;

  const numericValue = parseInt(props.rating, 10);
  // Handle invalid numbers safely
  return isNaN(numericValue) ? 0 : Math.round(numericValue / 2);
});
</script>

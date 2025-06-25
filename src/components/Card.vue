<template>
  <div class="card">
    <div>
      <h4>Title</h4>
      <span>{{ props.title }}</span>
    </div>
    <div>
      <h4>Released</h4>
      <span>{{ props.released }}</span>
    </div>
    <div>
      <h4>Season</h4>
      <span>{{ props.season }}</span>
    </div>
    <div>
      <h4>Episode</h4>
      <span>{{ props.episode }}</span>
    </div>
    <div>
      <span>Rating</span>
      <Rating :rating="props.imdbRating" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Rating from "./Rating.vue";

type Card = {
  season: string;
  title: string;
  released: string;
  episode: string;
  imdbRating: string;
};

const props = defineProps<Card>();
</script>
<style scoped></style>

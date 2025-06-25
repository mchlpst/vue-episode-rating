<script setup lang="ts">
import { useSerieStore } from "@/stores/serie-store";
import { ref, onMounted, computed } from "vue";
import Card from "@/components/Card.vue";

const store = useSerieStore();
const allSeasons = ref<any[]>([]); // Holds all fetched seasons
const filterSeasons = ref<string[]>(["1", "2", "3", "4", "5", "6", "7", "8"]); // Initial filter

// Computed property for active seasons
const activeSeasons = computed(() => {
  return allSeasons.value.filter((season) =>
    filterSeasons.value.includes(season.number.toString())
  );
});

// Toggle season in filter
const filterActiveSeason = (filterValue: string) => {
  const idx = filterSeasons.value.indexOf(filterValue);
  if (idx === -1) {
    filterSeasons.value.push(filterValue);
  } else {
    filterSeasons.value.splice(idx, 1);
  }
};

// Fetch data on mount
onMounted(async () => {
  const seasonsArray: any[] = [];
  const totalSeasons: number = 8;

  // Parallel fetching (faster than sequential)
  const promises = [];
  for (let i = 1; i <= totalSeasons; i++) {
    promises.push(store.getSeason(i));
  }

  const results = await Promise.all(promises);
  allSeasons.value = results;
});
</script>

<template>
  <aside class="filters">
    <div class="season-selection card">
      <h3>Season:</h3>
      <ul>
        <li v-for="season in allSeasons" :key="season.Season">
          <label :for="`${season.Title}${season.Season}`">
            <span>{{ season.Season }}</span>
            <input
              @click="() => filterActiveSeason(season.Season)"
              type="checkbox"
              :checked="filterSeasons.includes(season.Season)"
              name="season"
              :value="season.Season"
              :id="`${season.Title}${season.Season}`" />
          </label>
        </li>
      </ul>
    </div>
  </aside>
  <main class="episode-list">
    <section class="episode-container">
      <template v-for="season in allSeasons">
        <Card
          v-for="episode in season.Episodes"
          :title="episode.Title"
          :season="season.Season"
          :released="episode.Released"
          :episode="episode.Episode"
          :imdb-rating="episode.imdbRating"
          :key="episode.imdbID" />
      </template>
    </section>
  </main>
</template>

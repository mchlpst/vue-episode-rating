import { defineStore } from 'pinia'
import { fetchMovies } from '../../api/movie-api'

export const useSerieStore = defineStore('serieStore', () => {
  async function getSeason(season: number) {
    return await fetchMovies(season);
  }

  return { getSeason };
})

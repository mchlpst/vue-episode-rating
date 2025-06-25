import axios from 'axios';

export async function fetchMovies(season: number) {
  try {
    const response = await axios.get(`/api-response/season-${season}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

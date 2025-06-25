export interface ApiResponse {
    Title: string,
    Season: string,
    totalSeasons: string,
    Episodes: Array<Episode>
    Response: string,
}

export interface Episode {
    Title: string,
    Released: string,
    Episode: string,
    imdbRating: string,
    imdbID: string,
}

export interface EpisodeWithSeason extends Episode {
    season: number,
}

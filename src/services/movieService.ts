import axios from "axios";
import type { Movie } from "../types/movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${TMDB_TOKEN}`;

export interface MoviesResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (query: string, page: number): Promise<MoviesResponse> => {
  const response = await axios.get<MoviesResponse>("/search/movie", {
    params: { query, page },
  });

  return response.data;
};

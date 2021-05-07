export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  token?: string;
  role?: string;
  message?: string;
}

export interface User {
  uid: string;
  name: string;
  role: string;
}

export interface MoviesResponse {
  dates:         Dates;
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface Movie {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export interface TvShowsResponse {
  page:          number;
  results:       TvShow[];
  total_pages:   number;
  total_results: number;
}

export interface TvShow {
  backdrop_path:     string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  name:              string;
  origin_country:    OriginCountry[];
  original_language: OriginalLanguage;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  vote_average:      number;
  vote_count:        number;
}

export enum OriginCountry {
  Co = "CO",
  De = "DE",
  MX = "MX",
  Us = "US",
}

export enum OriginalLanguage {
  De = "de",
  En = "en",
  Es = "es",
}

export interface TvProp {
  [x: string]: any;
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: string;
    averageRuntime: string;
    premiered: string;
    ended: string;
    officialSite: string;
    schedule: {
      time: string;
      days: string;
    };
    rating: {
      average: number;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string;
    };
    webChannel: string;
    dvdCountry: string;
    externals: {
      tvrage: number;
      thetvdb: number;
      imdb: string;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  };
}

export interface Prop {
  tv: TvProp;
  index: number;
}

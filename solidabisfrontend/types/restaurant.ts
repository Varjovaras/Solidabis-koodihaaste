export interface Data {
  alreadyVoted?: string;
  date?: string;
  restaurants: Restaurant[];
}

export interface Restaurant {
  id: string;
  name: string;
  openingHours?: string;
  votes?: number;
  dishes?: Dishes[] | [];
}

export interface Result {
  date?: string;
  results: {
    votes: number;
    restaurantid: string;
    name: string;
    city: string;
  }[];
}

export interface Dishes {
  name?: string;
  price?: string;
  attributes?: string;
}

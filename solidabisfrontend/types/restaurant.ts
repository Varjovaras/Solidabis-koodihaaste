export interface Data {
  alreadyVoted?: string;
  date?: string;
  restaurants: Restaurant[];
}

export interface Restaurant {
  id?: string;
  name?: string;
  openingHours?: string;
  votes?: number;
  dishes?:
    | [
        {
          name?: string;
          price?: string;
          attributes?: string;
        }
      ]
    | [];
}

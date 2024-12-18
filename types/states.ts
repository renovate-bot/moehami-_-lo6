export interface StateData {
  name: string;
  abbreviation: string;
  stores: Store[];
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  rating: number;
  tags: string[];
  image?: string;
}
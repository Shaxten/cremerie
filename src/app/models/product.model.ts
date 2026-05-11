export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  ingredients: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export enum Category {
  Classic = 'Classique',
  Premium = 'Premium',
  Sorbet = 'Sorbet',
  Vegan = 'Végane',
  Seasonal = 'Saisonnier',
  Milkshake = 'Milkshake',
  Enrobage = 'Enrobage',
  Dessert = 'Dessert Glacé'
}

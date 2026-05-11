import { Injectable } from '@angular/core';
import { Product, Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Vanille de Madagascar',
      description: 'Une crème glacée onctueuse à la vanille bourbon de Madagascar, aux notes chaudes et sucrées.',
      price: 6.99,
      image: 'assets/images/vanille.jpg',
      category: Category.Classic,
      ingredients: ['Crème', 'Lait', 'Sucre', 'Vanille de Madagascar'],
      isBestseller: true
    },
    {
      id: 2,
      name: 'Chocolat Noir Intense',
      description: 'Un chocolat noir 72% de cacao pour les amateurs de saveurs profondes et intenses.',
      price: 7.49,
      image: 'assets/images/chocolat.jpg',
      category: Category.Classic,
      ingredients: ['Crème', 'Lait', 'Sucre', 'Cacao 72%'],
      isBestseller: true
    },
    {
      id: 3,
      name: 'Fraise des Bois',
      description: 'Un sorbet rafraîchissant aux fraises des bois cueillies à la main.',
      price: 7.99,
      image: 'assets/images/fraise.jpg',
      category: Category.Sorbet,
      ingredients: ['Fraises des bois', 'Sucre', 'Eau', 'Jus de citron'],
      isNew: true
    },
    {
      id: 4,
      name: 'Caramel Beurre Salé',
      description: 'Le mariage parfait entre le caramel fondant et la fleur de sel de Guérande.',
      price: 8.49,
      image: 'assets/images/caramel.jpg',
      category: Category.Premium,
      ingredients: ['Crème', 'Lait', 'Sucre', 'Beurre', 'Fleur de sel'],
      isBestseller: true
    },
    {
      id: 5,
      name: 'Pistache Sicilienne',
      description: 'Une crème glacée à la pistache de Bronte, Sicile. Un goût authentique et délicat.',
      price: 9.99,
      image: 'assets/images/pistache.jpg',
      category: Category.Premium,
      ingredients: ['Crème', 'Lait', 'Sucre', 'Pistaches de Sicile']
    },
    {
      id: 6,
      name: 'Mangue & Passion',
      description: 'Un sorbet tropical explosif aux mangues mûres et fruits de la passion.',
      price: 7.99,
      image: 'assets/images/mangue.jpg',
      category: Category.Sorbet,
      ingredients: ['Mangue', 'Fruit de la passion', 'Sucre', 'Eau']
    },
    {
      id: 7,
      name: 'Coco & Chocolat Végane',
      description: 'Une alternative végane crémeuse au lait de coco avec des éclats de chocolat noir.',
      price: 8.99,
      image: 'assets/images/coco-vegan.jpg',
      category: Category.Vegan,
      ingredients: ['Lait de coco', 'Sucre de coco', 'Chocolat noir végane'],
      isNew: true
    },
    {
      id: 8,
      name: 'Érable & Noix de Pécan',
      description: 'Le goût réconfortant du sirop d\'érable du Québec avec des noix de pécan caramélisées.',
      price: 8.99,
      image: 'assets/images/erable.jpg',
      category: Category.Seasonal,
      ingredients: ['Crème', 'Lait', 'Sirop d\'érable', 'Noix de pécan'],
      isNew: true
    },
    {
      id: 9,
      name: 'Citron Basilic',
      description: 'Un sorbet audacieux qui marie la fraîcheur du citron avec les notes herbacées du basilic.',
      price: 7.49,
      image: 'assets/images/citron-basilic.jpg',
      category: Category.Sorbet,
      ingredients: ['Citron', 'Basilic frais', 'Sucre', 'Eau']
    },
    {
      id: 10,
      name: 'Lavande & Miel',
      description: 'Une création florale délicate avec de la lavande de Provence et du miel d\'acacia.',
      price: 9.49,
      image: 'assets/images/lavande.jpg',
      category: Category.Premium,
      ingredients: ['Crème', 'Lait', 'Miel d\'acacia', 'Lavande de Provence'],
      isNew: true
    },
    // Milkshakes
    {
      id: 11,
      name: 'Milkshake Vanille Caramel',
      description: 'Un milkshake onctueux à la vanille, nappé de caramel beurre salé et couronné de crème fouettée.',
      price: 8.99,
      image: 'assets/images/milkshake-vanille.jpg',
      category: Category.Milkshake,
      ingredients: ['Crème glacée vanille', 'Lait entier', 'Caramel beurre salé', 'Crème fouettée'],
      isBestseller: true
    },
    {
      id: 12,
      name: 'Milkshake Fraise Gourmand',
      description: 'Des fraises fraîches mixées avec notre crème glacée maison pour un résultat fruité et velouté.',
      price: 9.49,
      image: 'assets/images/milkshake-fraise.jpg',
      category: Category.Milkshake,
      ingredients: ['Crème glacée fraise', 'Fraises fraîches', 'Lait', 'Coulis de fraise'],
      isNew: true
    },
    {
      id: 13,
      name: 'Milkshake Chocolat Intense',
      description: 'Un milkshake riche et décadent au chocolat noir 70%, garni de copeaux de chocolat.',
      price: 9.99,
      image: 'assets/images/milkshake-chocolat.jpg',
      category: Category.Milkshake,
      ingredients: ['Crème glacée chocolat', 'Lait', 'Chocolat noir 70%', 'Copeaux de chocolat']
    },
    {
      id: 14,
      name: 'Milkshake Oréo',
      description: 'Le classique revisité : biscuits Oréo émiettés dans un milkshake crémeux à la vanille.',
      price: 9.49,
      image: 'assets/images/milkshake-oreo.jpg',
      category: Category.Milkshake,
      ingredients: ['Crème glacée vanille', 'Lait', 'Biscuits Oréo', 'Crème fouettée'],
      isBestseller: true
    },
    // Enrobages
    {
      id: 15,
      name: 'Bâtonnet Chocolat au Lait',
      description: 'Crème glacée vanille enrobée d\'un chocolat au lait craquant, sur bâtonnet artisanal.',
      price: 5.99,
      image: 'assets/images/enrobage-choco-lait.jpg',
      category: Category.Enrobage,
      ingredients: ['Crème glacée vanille', 'Chocolat au lait 38%', 'Beurre de cacao'],
      isBestseller: true
    },
    {
      id: 16,
      name: 'Bâtonnet Chocolat Noir & Amandes',
      description: 'Un enrobage de chocolat noir parsemé d\'éclats d\'amandes grillées, cœur framboise.',
      price: 6.99,
      image: 'assets/images/enrobage-noir-amandes.jpg',
      category: Category.Enrobage,
      ingredients: ['Crème glacée framboise', 'Chocolat noir 72%', 'Amandes grillées', 'Beurre de cacao']
    },
    {
      id: 17,
      name: 'Bâtonnet Chocolat Blanc & Pistache',
      description: 'Crème glacée pistache enveloppée de chocolat blanc et de pistaches caramélisées.',
      price: 7.49,
      image: 'assets/images/enrobage-blanc-pistache.jpg',
      category: Category.Enrobage,
      ingredients: ['Crème glacée pistache', 'Chocolat blanc', 'Pistaches caramélisées'],
      isNew: true
    },
    {
      id: 18,
      name: 'Bâtonnet Caramel Croquant',
      description: 'Cœur de crème glacée caramel, enrobage chocolat au lait avec éclats de caramel croquant.',
      price: 6.49,
      image: 'assets/images/enrobage-caramel.jpg',
      category: Category.Enrobage,
      ingredients: ['Crème glacée caramel', 'Chocolat au lait', 'Éclats de caramel', 'Fleur de sel']
    },
    // Desserts Glacés
    {
      id: 19,
      name: 'Coupe Glacée Royale',
      description: 'Trois boules au choix, chantilly maison, coulis de fruits rouges, amandes effilées et tuile dentelle.',
      price: 12.99,
      image: 'assets/images/coupe-royale.jpg',
      category: Category.Dessert,
      ingredients: ['3 boules crème glacée', 'Chantilly maison', 'Coulis fruits rouges', 'Amandes', 'Tuile dentelle'],
      isBestseller: true
    },
    {
      id: 20,
      name: 'Profiteroles Glacées',
      description: 'Choux croustillants garnis de crème glacée vanille, nappés de chocolat chaud fondant.',
      price: 11.99,
      image: 'assets/images/profiteroles.jpg',
      category: Category.Dessert,
      ingredients: ['Pâte à choux', 'Crème glacée vanille', 'Sauce chocolat chaud', 'Amandes effilées']
    },
    {
      id: 21,
      name: 'Banana Split Classique',
      description: 'La banane fraîche accompagnée de trois saveurs, chantilly, sauces chocolat et caramel.',
      price: 11.49,
      image: 'assets/images/banana-split.jpg',
      category: Category.Dessert,
      ingredients: ['Banane fraîche', 'Crème glacée vanille/chocolat/fraise', 'Chantilly', 'Sauces', 'Cerises'],
      isNew: true
    },
    {
      id: 22,
      name: 'Vacherin Glacé',
      description: 'Meringue croustillante, cœur de sorbet framboise et crème glacée vanille, coulis de fruits.',
      price: 13.99,
      image: 'assets/images/vacherin.jpg',
      category: Category.Dessert,
      ingredients: ['Meringue française', 'Sorbet framboise', 'Crème glacée vanille', 'Coulis de fruits'],
      isNew: true
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: Category): Product[] {
    return this.products.filter(p => p.category === category);
  }

  getBestsellers(): Product[] {
    return this.products.filter(p => p.isBestseller);
  }

  getNewProducts(): Product[] {
    return this.products.filter(p => p.isNew);
  }

  getCategories(): Category[] {
    return Object.values(Category);
  }
}

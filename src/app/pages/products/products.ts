import { Component, inject } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  private productService = inject(ProductService);

  categories = this.productService.getCategories();
  allProducts = this.productService.getProducts();
  filteredProducts: Product[] = this.allProducts;
  selectedCategory: Category | null = null;

  filterByCategory(category: Category | null): void {
    this.selectedCategory = category;
    this.filteredProducts = category
      ? this.productService.getProductsByCategory(category)
      : this.allProducts;
  }
}

import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product';
import { ScrollAnimationService } from '../../services/scroll-animation';
import { Product, Category } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [HeroBanner, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements AfterViewInit, OnDestroy {
  private productService = inject(ProductService);
  private scrollAnimation = inject(ScrollAnimationService);

  categories = this.productService.getCategories();
  allProducts = this.productService.getProducts();
  filteredProducts: Product[] = this.allProducts;
  selectedCategory: Category | null = null;

  ngAfterViewInit(): void {
    this.scrollAnimation.init();
  }

  ngOnDestroy(): void {
    this.scrollAnimation.destroy();
  }

  filterByCategory(category: Category | null): void {
    this.selectedCategory = category;
    this.filteredProducts = category
      ? this.productService.getProductsByCategory(category)
      : this.allProducts;
    setTimeout(() => this.scrollAnimation.refresh(), 50);
  }
}

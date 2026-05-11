import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-home',
  imports: [HeroBanner, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnDestroy {
  private productService = inject(ProductService);
  private scrollAnimation = inject(ScrollAnimationService);

  bestsellers = this.productService.getBestsellers();
  newProducts = this.productService.getNewProducts();

  ngAfterViewInit(): void {
    this.scrollAnimation.init();
  }

  ngOnDestroy(): void {
    this.scrollAnimation.destroy();
  }
}

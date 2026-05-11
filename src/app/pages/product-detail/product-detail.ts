import { Component, inject, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss'
})
export class ProductDetail implements OnInit, AfterViewInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private scrollAnimation = inject(ScrollAnimationService);

  product: Product | undefined;

  private gradients: Record<string, string> = {
    'Classique': 'linear-gradient(135deg, #ffecd2, #fcb69f)',
    'Premium': 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    'Sorbet': 'linear-gradient(135deg, #89f7fe, #66a6ff)',
    'Végane': 'linear-gradient(135deg, #96e6a1, #d4fc79)',
    'Saisonnier': 'linear-gradient(135deg, #fccb90, #d57eeb)',
    'Milkshake': 'linear-gradient(135deg, #fbc2eb, #f6d5f7)',
    'Enrobage': 'linear-gradient(135deg, #6a3093, #a044ff)',
    'Dessert Glacé': 'linear-gradient(135deg, #f093fb, #f5576c)'
  };

  private emojis: Record<string, string> = {
    'Classique': '🍦',
    'Premium': '🍨',
    'Sorbet': '🧊',
    'Végane': '🌱',
    'Saisonnier': '🍂',
    'Milkshake': '🥤',
    'Enrobage': '🍫',
    'Dessert Glacé': '🍧'
  };

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  ngAfterViewInit(): void {
    this.scrollAnimation.init();
  }

  ngOnDestroy(): void {
    this.scrollAnimation.destroy();
  }

  getGradient(): string {
    if (!this.product) return '';
    return this.gradients[this.product.category] || this.gradients['Classique'];
  }

  getEmoji(): string {
    if (!this.product) return '🍦';
    return this.emojis[this.product.category] || '🍦';
  }
}

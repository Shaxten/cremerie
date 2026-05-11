import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  product = input.required<Product>();

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

  getGradient(): string {
    return this.gradients[this.product().category] || this.gradients['Classique'];
  }

  getEmoji(): string {
    return this.emojis[this.product().category] || '🍦';
  }
}

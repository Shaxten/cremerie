import { Component, input, HostListener, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  imports: [RouterLink],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss'
})
export class HeroBanner {
  title = input('');
  subtitle = input('');
  ctaText = input('');
  ctaLink = input('/produits');
  compact = input(false);

  private el = inject(ElementRef);
  mouseX = 0;
  mouseY = 0;
  parallaxY = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 20;
    this.mouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 20;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.parallaxY = window.scrollY * 0.3;
  }

  get transform3D(): string {
    return `rotateY(${this.mouseX}deg) rotateX(${-this.mouseY}deg)`;
  }

  get parallaxTransform(): string {
    return `translateY(${this.parallaxY}px)`;
  }
}

import { Injectable, NgZone, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private ngZone = inject(NgZone);
  private observer: IntersectionObserver | null = null;

  init(): void {
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              this.observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      this.observeElements();
    });
  }

  observeElements(): void {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children';
    const elements = document.querySelectorAll(selectors);
    elements.forEach(el => this.observer?.observe(el));
  }

  refresh(): void {
    setTimeout(() => this.observeElements(), 100);
  }

  destroy(): void {
    this.observer?.disconnect();
  }
}

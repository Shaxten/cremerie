import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-about',
  imports: [HeroBanner],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit, OnDestroy {
  private scrollAnimation = inject(ScrollAnimationService);

  ngAfterViewInit(): void {
    this.scrollAnimation.init();
  }

  ngOnDestroy(): void {
    this.scrollAnimation.destroy();
  }
}

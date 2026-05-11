import { Component, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationService } from '../../services/scroll-animation';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements AfterViewInit, OnDestroy {
  private scrollAnimation = inject(ScrollAnimationService);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  ngAfterViewInit(): void {
    this.scrollAnimation.init();
  }

  ngOnDestroy(): void {
    this.scrollAnimation.destroy();
  }

  onSubmit(): void {
    this.submitted = true;
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}

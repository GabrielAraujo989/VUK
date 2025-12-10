import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  glowX = 25;
  glowY = 25;
  glow2X = 75;
  glow2Y = 75;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.elementRef.nativeElement.querySelector('section').getBoundingClientRect();
    this.glowX = ((event.clientX - rect.left) / rect.width) * 100;
    this.glowY = ((event.clientY - rect.top) / rect.height) * 100;

    // Segundo glow se move no sentido oposto
    this.glow2X = 100 - this.glowX;
    this.glow2Y = 100 - this.glowY;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    const rect = this.elementRef.nativeElement.querySelector('section').getBoundingClientRect();
    this.glowX = ((touch.clientX - rect.left) / rect.width) * 100;
    this.glowY = ((touch.clientY - rect.top) / rect.height) * 100;

    // Segundo glow se move no sentido oposto
    this.glow2X = 100 - this.glowX;
    this.glow2Y = 100 - this.glowY;
  }
}

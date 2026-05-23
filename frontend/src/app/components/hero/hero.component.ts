import { Component, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  glowX = 25;
  glowY = 25;
  glow2X = 75;
  glow2Y = 75;

  currentText = '';
  private typewriterTexts = ['Branding', 'Marketing Digital', 'Design Criativo', 'Social Media', 'Resultados'];
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typewriterTimer: any;

  particles: Particle[] = [];
  private readonly COLORS = [
    'rgba(139,92,246,0.8)',
    'rgba(236,72,153,0.8)',
    'rgba(249,115,22,0.7)',
    'rgba(6,182,212,0.7)',
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.generateParticles();
    this.runTypewriter();
  }

  ngOnDestroy() {
    clearTimeout(this.typewriterTimer);
  }

  private generateParticles() {
    this.particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    }));
  }

  private runTypewriter() {
    const fullText = this.typewriterTexts[this.textIndex];
    const speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex < fullText.length) {
      this.currentText = fullText.slice(0, ++this.charIndex);
    } else if (this.isDeleting && this.charIndex > 0) {
      this.currentText = fullText.slice(0, --this.charIndex);
    } else if (!this.isDeleting) {
      this.isDeleting = true;
      this.typewriterTimer = setTimeout(() => this.runTypewriter(), 1800);
      return;
    } else {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.typewriterTexts.length;
      this.typewriterTimer = setTimeout(() => this.runTypewriter(), 400);
      return;
    }

    this.typewriterTimer = setTimeout(() => this.runTypewriter(), speed);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.elementRef.nativeElement.querySelector('section').getBoundingClientRect();
    this.glowX = ((event.clientX - rect.left) / rect.width) * 100;
    this.glowY = ((event.clientY - rect.top) / rect.height) * 100;
    this.glow2X = 100 - this.glowX;
    this.glow2Y = 100 - this.glowY;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    const rect = this.elementRef.nativeElement.querySelector('section').getBoundingClientRect();
    this.glowX = ((touch.clientX - rect.left) / rect.width) * 100;
    this.glowY = ((touch.clientY - rect.top) / rect.height) * 100;
    this.glow2X = 100 - this.glowX;
    this.glow2Y = 100 - this.glowY;
  }
}

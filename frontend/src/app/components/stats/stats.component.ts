import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: number;
  display: string;
  suffix: string;
  label: string;
  icon: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {
  stats: Stat[] = [
    { value: 150, display: '0', suffix: '+', label: 'Projetos Entregues', icon: '🚀', current: 0 },
    { value: 80, display: '0', suffix: '+', label: 'Clientes Satisfeitos', icon: '🤝', current: 0 },
    { value: 5, display: '0', suffix: '', label: 'Anos de Experiência', icon: '⚡', current: 0 },
    { value: 98, display: '0', suffix: '%', label: 'Taxa de Satisfação', icon: '⭐', current: 0 },
  ];

  private observed = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.observed) {
          this.observed = true;
          this.animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(this.el.nativeElement);
  }

  private animateCounters() {
    this.stats.forEach(stat => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        stat.current = Math.min(Math.round(increment * step), stat.value);
        stat.display = stat.current.toString();
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    });
  }
}

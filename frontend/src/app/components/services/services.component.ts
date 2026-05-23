import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  gradient: string;
  accentColor: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @ViewChildren('serviceCard') cards!: QueryList<ElementRef>;

  services: Service[] = [
    {
      icon: '🎯',
      title: 'Branding',
      description: 'Criamos identidades visuais únicas e memoráveis que posicionam sua marca com autoridade e consistência no mercado.',
      tag: 'Identidade Visual',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      gradient: 'from-violet-900/90 via-purple-800/70 to-transparent',
      accentColor: '#8b5cf6',
    },
    {
      icon: '📱',
      title: 'Marketing Digital',
      description: 'Estratégias digitais orientadas por dados que geram tráfego qualificado, leads e conversões reais para o seu negócio.',
      tag: 'Performance',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
      gradient: 'from-orange-900/90 via-orange-700/70 to-transparent',
      accentColor: '#f97316',
    },
    {
      icon: '🎨',
      title: 'Design Criativo',
      description: 'Peças visuais que comunicam, encantam e convertem — do conceito à entrega final com alto padrão de qualidade.',
      tag: 'Criação',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      gradient: 'from-pink-900/90 via-rose-700/70 to-transparent',
      accentColor: '#ec4899',
    },
    {
      icon: '📊',
      title: 'Social Media',
      description: 'Gestão estratégica de redes sociais com conteúdo que engaja, cresce sua audiência e fortalece a presença digital.',
      tag: 'Engajamento',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
      gradient: 'from-cyan-900/90 via-sky-700/70 to-transparent',
      accentColor: '#06b6d4',
    },
    {
      icon: '🎬',
      title: 'Produção Audiovisual',
      description: 'Vídeos institucionais, reels e conteúdos audiovisuais que contam histórias poderosas e geram impacto real.',
      tag: 'Vídeo & Motion',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      gradient: 'from-red-900/90 via-rose-800/70 to-transparent',
      accentColor: '#ef4444',
    },
    {
      icon: '💡',
      title: 'Consultoria',
      description: 'Diagnóstico completo e planejamento estratégico para alavancar sua presença digital e maximizar seus resultados.',
      tag: 'Estratégia',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      gradient: 'from-emerald-900/90 via-teal-700/70 to-transparent',
      accentColor: '#10b981',
    },
  ];

  onMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  }

  onMouseLeave(card: HTMLElement) {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  }
}

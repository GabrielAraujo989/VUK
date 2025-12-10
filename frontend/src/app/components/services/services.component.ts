import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '🎯',
      title: 'Branding',
      description: 'Criamos identidades visuais únicas que destacam sua marca no mercado'
    },
    {
      icon: '📱',
      title: 'Marketing Digital',
      description: 'Estratégias digitais que geram resultados reais e mensuráveis'
    },
    {
      icon: '🎨',
      title: 'Design Criativo',
      description: 'Soluções visuais impactantes que capturam a essência da sua marca'
    },
    {
      icon: '📊',
      title: 'Social Media',
      description: 'Gestão completa de redes sociais com conteúdo estratégico'
    },
    {
      icon: '🎬',
      title: 'Produção Audiovisual',
      description: 'Vídeos e conteúdos audiovisuais que contam histórias memoráveis'
    },
    {
      icon: '💡',
      title: 'Consultoria',
      description: 'Orientação estratégica para alavancar seu negócio no digital'
    }
  ];
}

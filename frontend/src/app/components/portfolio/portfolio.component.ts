import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Projeto Alpha',
      category: 'Branding & Identidade',
      description: 'Rebranding completo de marca lifestyle',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
      gradient: 'from-vuk-primary-500 to-vuk-pink-500'
    },
    {
      title: 'Campanha Beta',
      category: 'Marketing Digital',
      description: 'Campanha digital multi-plataforma',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800',
      gradient: 'from-vuk-accent-500 to-vuk-primary-500'
    },
    {
      title: 'Visual Gamma',
      category: 'Design Criativo',
      description: 'Identidade visual para evento corporativo',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
      gradient: 'from-vuk-secondary-500 to-vuk-accent-500'
    },
    {
      title: 'Social Delta',
      category: 'Social Media',
      description: 'Estratégia de conteúdo para redes sociais',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
      gradient: 'from-vuk-pink-500 to-vuk-secondary-500'
    }
  ];
}

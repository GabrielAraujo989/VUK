import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Video {
  id: string;
  title: string;
  description: string;
  tag: string;
  safeUrl?: SafeResourceUrl;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss'
})
export class VideosComponent {
  activeVideo: string | null = null;
  activeSafeUrl: SafeResourceUrl | null = null;

  videos: Video[] = [
    {
      id: 'X0f5z6vYTK8',
      title: 'VUK Comunicação — Institucional',
      description: 'Conheça a VUK Comunicação, nossa história, valores e como transformamos marcas em experiências inesquecíveis.',
      tag: 'Institucional',
    },
    {
      id: 'oqH_wN4M3HM',
      title: 'VUK em Ação',
      description: 'Veja nossa equipe criativa trabalhando e os resultados que entregamos para nossos clientes.',
      tag: 'Portfólio',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.videos = this.videos.map(v => ({
      ...v,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1&color=white&autoplay=1`
      )
    }));
  }

  openVideo(id: string) {
    this.activeVideo = id;
    this.activeSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&color=white&autoplay=1`
    );
  }

  closeVideo() {
    this.activeVideo = null;
    this.activeSafeUrl = null;
  }

  getThumb(id: string): string {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }
}

import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
indiceActual: number = 0;
  
  // Variables para el Modal de imágenes
  modalAbierto: boolean = false;
  imagenActualModal: string = '';

  moverSlide(direccion: number) {
    const track = document.querySelector('.carrusel-track') as HTMLElement;
    const slides = Array.from(track.children) as HTMLElement[];
    
    this.indiceActual += direccion;

    if (this.indiceActual >= slides.length) {
      this.indiceActual = 0;
    } else if (this.indiceActual < 0) {
      this.indiceActual = slides.length - 1;
    }

    const anchoSlide = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + (this.indiceActual * anchoSlide) + 'px)';
  }

  // Funciones del Modal
  abrirModal(urlImagen: string) {
    this.imagenActualModal = urlImagen;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.imagenActualModal = '';
}

}

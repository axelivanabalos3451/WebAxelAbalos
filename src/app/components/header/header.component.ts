import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAbierto = false;

  cerrarMenu() {
    this.menuAbierto = false;
  }

  irASeccion(event: Event, id: string) {
    event.preventDefault();

    this.cerrarMenu();

    const elemento = document.getElementById(id);
    if (!elemento) return;

    const offset = 80; // altura de tu header fijo
    const destino = elemento.getBoundingClientRect().top + window.scrollY - offset;
    const inicio = window.scrollY;
    const distancia = destino - inicio;
    const duracion = 1000; // ajustá la velocidad acá
    let inicioTiempo: number | null = null;

    const animarScroll = (tiempoActual: number) => {
      if (inicioTiempo === null) inicioTiempo = tiempoActual;
      const tiempoTranscurrido = tiempoActual - inicioTiempo;
      const progreso = Math.min(tiempoTranscurrido / duracion, 1);
      const easeInOutQuad = progreso < 0.5
        ? 2 * progreso * progreso
        : 1 - Math.pow(-2 * progreso + 2, 2) / 2;

      window.scrollTo(0, inicio + distancia * easeInOutQuad);

      if (tiempoTranscurrido < duracion) {
        requestAnimationFrame(animarScroll);
      }
    };

    requestAnimationFrame(animarScroll);
  }


}

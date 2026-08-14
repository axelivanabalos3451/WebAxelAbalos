import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent { // <-- Asegúrate de que tenga "export"

   email: string = 'axelabalosss@gmail.com';

  copiarEmail() {
    navigator.clipboard.writeText(this.email).catch(err => {
      console.error('No se pudo copiar el email: ', err);
    });
    // No hacemos preventDefault, así el mailto: sigue intentando abrirse normalmente
  }
}
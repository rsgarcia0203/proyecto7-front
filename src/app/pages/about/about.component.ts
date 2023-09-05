import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  protected restaurantProjectDescription:string = `
  Nuestra WebApp de Restaurante es la solución perfecta para amantes de la comida y la comodidad.
  Te ofrecemos una experiencia culinaria única desde la comodidad de tu hogar. Explora nuestro
  variado menú de platos deliciosos y realiza pedidos en línea para entrega a domicilio o para llevar.

  Características de la WebApp de Restaurante:
  - Menú en línea con una amplia gama de opciones culinarias.
  - Realiza pedidos en línea y personaliza tus platos según tus preferencias.
  - Opciones de entrega a domicilio o para llevar, según tus necesidades.
  - Fácil seguimiento del estado de tus pedidos en tiempo real.
  - Reserva de mesas en nuestro acogedor restaurante directamente desde la web.

  Nos enorgullece brindarte una experiencia gastronómica excepcional y un servicio al cliente de primer nivel.
  ¡Esperamos verte pronto y satisfacer tus antojos culinarios!
`;
}

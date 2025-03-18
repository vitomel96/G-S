import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  numero: string  = environment.numero;
  whatsapp: string = environment.whatsapp;
}

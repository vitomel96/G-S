import { Component } from '@angular/core';
import { ServiciosComponent } from "./servicios/servicios.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { environment } from '../../../../environments/environment.prod';
import { RecommendationsComponent } from "./recommendations/recommendations.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ServiciosComponent, AboutUsComponent, RecommendationsComponent]
})
export class HomeComponent {
  numero: string = environment.numero;
  whatsapp: string =environment.whatsapp;
  ngOnInit() {
  }

}

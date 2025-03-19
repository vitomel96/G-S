import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment.prod';
import { RecommendationsComponent } from "../recommendations/recommendations.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RecommendationsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  numero: string = environment.numero;
  whatsapp: string = environment.whatsapp;
  facebook: string = environment.facebook;
}

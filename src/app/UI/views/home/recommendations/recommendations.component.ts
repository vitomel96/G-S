import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  customers: number = 0;
  companies: number = 0;
  services: number = 0;
  years: number = 0;

  constructor() {}

  ngOnInit() {
    AOS.init();
    this.animateCounters();
  }

  animateCounters() {
    const targets = {
      customers: 1000,
      companies: 20,
      services: 5000,
      years: 10
    };

    let interval = setInterval(() => {
      this.incrementCounters(targets);
    }, 50);
    
    setTimeout(() => clearInterval(interval), 2000);
  }

  incrementCounters(targets: any) {
    if (this.customers < targets.customers) this.customers += 10;
    if (this.companies < targets.companies) this.companies += 1;
    if (this.services < targets.services) this.services += 50;
    if (this.years < targets.years) this.years += 1;
  }
}

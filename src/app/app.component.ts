import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AnalogPlace {
  name: string;
  tags: string;
  type: 'Moon Analog' | 'Mars Analog';
  image: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  filters = ['ALL', 'Moon Analogs', 'Mars Analogs'];
  selectedFilter = 'ALL';
  detailsOpen = false;

  places: AnalogPlace[] = [
    {
      name: 'Antarctica',
      tags: 'Cold | Isolated | Extreme Environment',
      type: 'Moon Analog',
      image: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=500',
      description: 'An isolated, cold environment for studying habitat systems and human performance.'
    },
    {
      name: 'Atacama Desert (Chile)',
      tags: 'Dry | High Radiation | Mars Analog',
      type: 'Mars Analog',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500',
      description: 'An exceptionally dry desert environment useful for studying Mars-like terrain and field research.'
    },
    {
      name: 'Hawaiian Volcanic Terrain',
      tags: 'Volcanic | Rocky | Field Research',
      type: 'Moon Analog',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500',
      description: 'Volcanic landscapes help researchers test geological field methods and exploration equipment.'
    },
    {
      name: 'Utah Desert',
      tags: 'Dry | Rocky | Mars Analog',
      type: 'Mars Analog',
      image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=500',
      description: 'Arid terrain for testing rover operations, exploration procedures and field equipment.'
    }
  ];

  selectedPlace: AnalogPlace = this.places[1];

  get filteredPlaces(): AnalogPlace[] {
    if (this.selectedFilter === 'ALL') {
      return this.places;
    }

    const type = this.selectedFilter === 'Moon Analogs'
      ? 'Moon Analog'
      : 'Mars Analog';

    return this.places.filter(place => place.type === type);
  }

  showDetails(place: AnalogPlace): void {
    this.selectedPlace = place;
    this.detailsOpen = true;
  }
}
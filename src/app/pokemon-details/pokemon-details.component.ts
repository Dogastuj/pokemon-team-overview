import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
  
  @Input() pokemon!: Pokemon;
}

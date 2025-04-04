import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../models/pokemon.model';
import { PokeAPIService } from '../services/poke-api.service'; 

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon!: Pokemon;

  constructor(private pokeAPIService: PokeAPIService) {}

  ngOnInit(): void {
  }
}

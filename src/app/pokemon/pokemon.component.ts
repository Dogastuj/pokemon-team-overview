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

  movesAndTypes!: Record<string, string>;

  constructor(private pokeAPIService: PokeAPIService, ) {
  }

  
  ngOnInit(): void {
    this.pokemon.moves.forEach(async move => {
      this.movesAndTypes = await this.pokeAPIService.getMovesType(this.pokemon.moves);
    });
    
  }
}

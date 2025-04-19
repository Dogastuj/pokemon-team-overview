import { Component } from '@angular/core';
import { SharePokemonService } from '../services/share-pokemon.service';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-page',
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent {

  pokemon! : Pokemon;
  movesAndTypes!: Record<string, string>;

  constructor(
    private sharePokemonService: SharePokemonService, 
    private router: Router
  ) {}

  async ngOnInit() {
    if (this.sharePokemonService.isPokemonShared()) {
      this.pokemon = this.sharePokemonService.getPokemon();
      this.movesAndTypes = this.sharePokemonService.getMovesAndTypes();
    } else {
      this.router.navigateByUrl('');
    }
  }
  

}

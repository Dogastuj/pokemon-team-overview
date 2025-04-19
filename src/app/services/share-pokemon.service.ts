import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class SharePokemonService {

  private pokemon?: Pokemon;
  private isShared: boolean = false;
  movesAndTypes!: Record<string, string>;

  constructor() { }

  changePokemon(pokemon: Pokemon) {
    this.pokemon = pokemon;
    this.isShared = true;
  }

  getPokemon(): Pokemon {
    return this.pokemon!;
  }

  getMovesAndTypes(){
    return this.movesAndTypes!;
  }

  isPokemonShared(): boolean{
    return this.isShared;
  }

  changeMovesAndTypes(movesAndTypes: Record<string, string>) {
    this.movesAndTypes = movesAndTypes;
}

}
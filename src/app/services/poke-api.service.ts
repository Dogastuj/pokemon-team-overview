import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}


  setImgOnPokemon(pokemon: Pokemon): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.name).subscribe(
        (response: any) => {
          const imageUrl = response.sprites.front_default;
          pokemon.imageUrl = imageUrl;
          resolve(imageUrl);
        },
        error => {
          reject('');
        }
      );
    });
  }
  

  setPokemonImageUrl(response: any, pokemon : Pokemon) {
    try{
      const imageUrl: string = response?.sprites?.front_default;
      pokemon.imageUrl = imageUrl;
    } catch(err){
      console.error(err)
    }
   }

   getMoveInfo(moveName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://pokeapi.co/api/v2/move/' + moveName).subscribe(
        (response: any) => {
          resolve(response);
        },
        error => {
          reject('');
        }
      );
    });
  }

  getMovesType(moves: string[]): Record<string, string>{

    const movesAndTypes: Record<string, string> = {};
    moves.forEach(move => {
        const hiddenPowerMatch = move.match(/^Hidden Power \[([^\]]+)\]$/i);
        if (hiddenPowerMatch) {
          const type = hiddenPowerMatch[1].toLowerCase();
          movesAndTypes[move] = type;
        } else {
          this.http.get('https://pokeapi.co/api/v2/move/' + move.replace(/\s+/g, '-')).subscribe(
          (response: any) => {
            const moveType = response?.type?.name;
            movesAndTypes[move] = moveType;
          });
        }
    });
    return movesAndTypes;
  }
  
}

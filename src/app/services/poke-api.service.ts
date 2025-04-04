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
}

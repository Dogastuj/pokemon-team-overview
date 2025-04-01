import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root' 
})
export class PokeAPIService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}


  setImgOnPokemon(pokemon : Pokemon) {
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.name).subscribe(response => {
        this.setPokemonImageUrl(response, pokemon);
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

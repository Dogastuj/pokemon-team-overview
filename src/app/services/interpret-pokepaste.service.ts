import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterpretPokepasteService {

  constructor() {}

  interpretPokepaste(pokepaste: String): Pokemon[] {
    const team: Pokemon[] = [];

    var pokepasteTable : String[][] = this.getPokepasteTable(pokepaste);


    pokepasteTable.forEach(pokemonPaste => {
      var pokemon: Pokemon = new Pokemon();

      
      firstLineProcess(pokemonPaste.shift()!, pokemon);
      console.log('pokemon :');
      console.log(pokemon);

      /*
      pokemonPaste.forEach(lineOfThePaste => {
        
      }); */
    });

    


    

    return team;
  }

  /**
   * 
   * @param pokepaste a pokepaste String
   * @returns a table of Strings tables, where each table is a pokemon's paste
   */
  private getPokepasteTable(pokepaste: String): String[][]{

    var pokepasteTable: String[][] = [];

    var pokepasteLines = pokepaste.split('\n');

    var currentPokemon :String[]= [];

    var currentLine: String;
    
    for (const line of pokepasteLines) {
      if(line === ''){
        if(currentPokemon.length > 0){
          pokepasteTable.push(currentPokemon);
        }
        currentPokemon = [];
      } else {
        currentPokemon.push(line);
      }  
    }

    return pokepasteTable

    
  }
}
  
  
    /**
    * Process the first line of the pokemon paste to extract the nickname, name and held item
    * @param firstLine the first line of the pokemon paste
    * @param pokemon the pokemon object to fill with the data
    */
function firstLineProcess(firstLine: String , pokemon: Pokemon) {

  var theFirstLine = firstLine;

  if(pokemonHeldingAnItem(firstLine)){
    console.log('the pokemon is holding an item');
    var firstLineParts = firstLine.split('@');

    if (firstLineParts) {
      pokemon.heldItem = firstLineParts[1].trim();

  
    }

    theFirstLine = firstLineParts[0];

  } else {
    console.log('the pokemon isnt holding an item');

  }

  if(pokemonHasNickname(theFirstLine)){
    console.log('the pokemon has a nickname');
    var nicknameAndName = theFirstLine.split('(');
    console.log('nicknameAndName :');
    console.log(nicknameAndName);

      pokemon.nickname = nicknameAndName[0].trim();
      pokemon.name = nicknameAndName[1].trim().slice(0, -1);

    } else{
      console.log('the doesnt pokemon have a nickname');
      pokemon.name = theFirstLine.trim();
      pokemon.nickname = null;
    }
        

      

  
  }


/**
 * 
 * @param firstLine the first line of the pokemon paste
 * @returns true if the pokemon is holding an item, false otherwise
 */
function pokemonHeldingAnItem(firstLine: String) : boolean {
  return firstLine.includes('@');
}

function pokemonHasNickname(pokemonName: String) {
  return pokemonName.includes('(');
}


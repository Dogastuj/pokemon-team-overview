import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model'
import { PokeAPIService } from './poke-api.service';
import { TypesRelationsService } from './types-relations.service';

@Injectable({
  providedIn: 'root',
})
export class InterpretPokepasteService {

  constructor(private readonly pokepasteAPI: PokeAPIService, private readonly typesRelations: TypesRelationsService) {}

  async interpretPokepaste(pokepaste: String): Promise<Pokemon[]> {
    const team: Pokemon[] = [];

    var pokepasteTable : String[][] = this.getPokepasteTable(pokepaste);


    pokepasteTable.forEach(pokemonPaste => {
      var pokemon: Pokemon = new Pokemon();

      
      this.firstLineProcess(pokemonPaste.shift()!, pokemon); // the first line can contain multiple information, so we have a special traitment for it
      
      pokemonPaste.forEach(lineOfThePaste => { //for the rest of the lines

        if(this.isKeyValueLine(lineOfThePaste)){ //Some of the value are key-value pairs, so we have a traitment for those

          var keyValue = lineOfThePaste.split(':');

          if(keyValue.length === 2){

            var key = keyValue[0].trim();
            var value = keyValue[1].trim();
            this.bindKeyValue(key, value, pokemon);
          }
        }
        else if(this.isAttack(lineOfThePaste)){ //attacks have a special syntax, so we have a traitment for it
          this.bindAttack(lineOfThePaste, pokemon);
        }

        // We have to check if the line is an attack before checking is its a nature, because it can create problems if an attack name contains 'Nature' (for example 'Nature Power')

        else if(this.isNature(lineOfThePaste)){ //nature has a special syntax, so we have a traitment for it
          this.bindNature(lineOfThePaste, pokemon);
        }
        
        
      });
      team.push(pokemon); // add the pokemon to the team
    });
    
    await this.setInfosOnPokemon(team);
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

  
  
    /**
    * Process the first line of the pokemon paste to extract the nickname, name and held item
    * @param firstLine the first line of the pokemon paste
    * @param pokemon the pokemon object to fill with the data
    */
  private firstLineProcess(firstLine: String , pokemon: Pokemon): void {

    var theFirstLine = firstLine;

    if(this.pokemonHeldingAnItem(firstLine)){
      var firstLineParts = firstLine.split('@');

      if (firstLineParts) {
        pokemon.heldItem = firstLineParts[1].trim();

    
      }

      theFirstLine = firstLineParts[0];

    } else {

    }

    if(this.pokemonHasNickname(theFirstLine)){
      var nicknameAndName = theFirstLine.split('(');

        pokemon.nickname = nicknameAndName[0].trim();
        pokemon.name = nicknameAndName[1].trim().slice(0, -1);

      } else{
        pokemon.name = theFirstLine.trim();
        pokemon.nickname = "";
      }
  }


  /**
   * 
   * @param firstLine the first line of the pokemon paste
   * @returns true if the pokemon is holding an item, false otherwise
   */
  private pokemonHeldingAnItem(firstLine: String) : boolean {
    return firstLine.includes('@');
  }

  private pokemonHasNickname(pokemonName: String): boolean {
    return pokemonName.includes('(');
  }

  /**
   * binds a attribute to a pokemon, note that the we doesnt check if the line is a key-value line
   * @param pasteLine a line of the pokemon paste
   */
  private bindKeyValue(key: String, value: String, pokemon: Pokemon): void {
    switch (key) {
      case 'Ability':
        pokemon.ability = value.trim();
        break;
      case 'Level':
        pokemon.level = parseInt(value.trim());
        break;
      case 'Shiny':
        pokemon.shiny = value.trim() === 'Yes' ? true : false;
        break;
      case 'Tera Type':
        pokemon.teraType = value.trim();
        break;
      case 'EVs':
        this.bindEvs(value, pokemon);
        break;
      case 'IVs':
        this.bindIvs(value, pokemon);
    }
  }

  /**
   * binds the Ivs to a pokemon
   * @param value a line of the pokemon paste
   * @param pokemon the pokemon to bind the ivs to
   */
  private bindIvs(value: String, pokemon: Pokemon): void {
    var ivs = value.split('/');

    ivs.forEach(iv => {
      var ivParts = iv.trim().split(' ');
      pokemon.ivs[ivParts[1].trim()] = parseInt(ivParts[0].trim());
      });

  }

  /**
   * binds the Evs to a pokemon
   * @param value a line of the pokemon paste
   * @param pokemon the pokemon to bind the evs to
   */
  private bindEvs(value: String, pokemon: Pokemon): void {
    var evs = value.split('/');

    evs.forEach(ev => {
      var evParts = ev.trim().split(' ');
      pokemon.evs[evParts[1].trim()] = parseInt(evParts[0].trim());
      });

  }


  isKeyValueLine(lineOfThePaste: String) {
    return lineOfThePaste.includes(':');
  }

  isNature(lineOfThePaste: String): boolean {
    return lineOfThePaste.includes('Nature');
  }

  /**
   * 
   * @param lineOfThePaste a line of the pokemon paste that contains the nature
   * @param pokemon the pokemon to bind the nature to
   */
  bindNature(lineOfThePaste: String, pokemon: Pokemon): void {
    var nature = lineOfThePaste.split(' ')[0].trim();
    pokemon.nature = nature;
  }

  bindAttack(lineOfThePaste: String, pokemon: Pokemon) : void{
    pokemon.moves.push(lineOfThePaste.substring(1).trim());
  }

  isAttack(lineOfThePaste: String) : boolean {
    return lineOfThePaste.startsWith("-");
  }

  async setInfosOnPokemon(team: Pokemon[]): Promise<void> {
    for (const pokemon of team) {
        await this.pokepasteAPI.setInfosOnPokemon(pokemon).then(() => {
          pokemon.typesRelations = this.typesRelations.calculateTypeMultipliers(pokemon.types);
       
        });        
    }
  }
  

}

import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class InterpretPokepasteService {

  constructor() {}

  interpretPokepaste(pokepaste: string): Pokemon[] {
    const pokemonLines = pokepaste.split('\n');
    const pokemonArray: Pokemon[] = [];

    let currentPokemon: Pokemon | null = null;

    pokemonLines.forEach((line) => {
      const trimmedLine = line.trim();

      // Si la ligne contient un nom de Pokémon et un objet
      if (trimmedLine.match(/^[A-Za-z]+/)) {
        if (currentPokemon) {
          pokemonArray.push(currentPokemon);  // Ajouter le Pokémon précédent à l'array
        }

        // Initialisation d'un nouveau Pokémon
        currentPokemon = new Pokemon();
        currentPokemon.name = trimmedLine.split(' ')[0]; // Nom du Pokémon
        currentPokemon.nickname = null;
        currentPokemon.talent = null;
        currentPokemon.nature = null;
        currentPokemon.heldItem = null;
        currentPokemon.teraType = null;
        currentPokemon.baseStats = { hp: 0, attack: 0, defense: 0, speed: 0 };
        currentPokemon.ivs = { hp: 31, attack: 31, defense: 31, speed: 31 };
        currentPokemon.evs = { hp: 0, attack: 0, defense: 0, speed: 0 };
        currentPokemon.moves = [];

        // Extraction de l'objet tenu
        const itemMatch = trimmedLine.match(/@ (.*)/);
        if (itemMatch) {
          currentPokemon.heldItem = itemMatch[1];
        }
      }

      if (currentPokemon) {
        // Traitement de l'Ability
        const abilityMatch = trimmedLine.match(/^Ability:\s*(.*)/);
        if (abilityMatch) {
          currentPokemon.talent = abilityMatch[1];
        }

        // Traitement du Level
        const levelMatch = trimmedLine.match(/^Level:\s*(\d+)/);
        if (levelMatch) {
          // Vous pouvez utiliser le niveau pour d'autres logiques si nécessaire.
        }

        // Traitement de Tera Type
        const teraTypeMatch = trimmedLine.match(/^Tera Type:\s*(.*)/);
        if (teraTypeMatch) {
          currentPokemon.teraType = teraTypeMatch[1];
        }

        // Traitement des EVs
        const evMatch = trimmedLine.match(/^EVs:\s*(.*)/);
        if (evMatch) {
          const evs = evMatch[1].split('/').map(ev => ev.trim());
          if (evs.length === 4) {
            currentPokemon.evs['hp'] = +evs[0].split(' ')[0];
            currentPokemon.evs['attack'] = +evs[1].split(' ')[0];
            currentPokemon.evs['defense'] = +evs[2].split(' ')[0];
            currentPokemon.evs['speed'] = +evs[3].split(' ')[0];
          }
        }

        // Traitement de la Nature
        const natureMatch = trimmedLine.match(/^([A-Za-z]+) Nature/);
        if (natureMatch) {
          currentPokemon.nature = natureMatch[1];
        }

        // Traitement des Moves
        const movesMatch = trimmedLine.match(/^-\s*(.*)/);
        if (movesMatch) {
          currentPokemon.moves.push(movesMatch[1]);
        }
      }
    });

    // Ajouter le dernier Pokémon si nécessaire
    if (currentPokemon) {
      pokemonArray.push(currentPokemon);
    }

    return pokemonArray;
  }
}

import { Injectable } from '@angular/core';
import { Type } from '../models/types.model';

@Injectable({
    providedIn: 'root'
})
export class TypesRelationsService {

    typeChart: Record<Type, Record<Type, number>> = {
        "normal": {
            "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1,
            "fighting": 2, "poison": 1, "ground": 1, "flying": 1, "psychic": 1,
            "bug": 1, "rock": 1, "ghost": 0, "dragon": 1, "dark": 1, "steel": 1
        },
        "fire": {
            "normal": 1, "fire": 0.5, "water": 0.5, "electric": 1, "grass": 2, "ice": 2,
            "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 1,
            "bug": 2, "rock": 0.5, "ghost": 1, "dragon": 1, "dark": 1, "steel": 2
        },
        "water": {
            "normal": 1, "fire": 2, "water": 0.5, "electric": 1, "grass": 0.5, "ice": 1,
            "fighting": 1, "poison": 1, "ground": 2, "flying": 1, "psychic": 1,
            "bug": 1, "rock": 2, "ghost": 1, "dragon": 0.5, "dark": 1, "steel": 1
        },
        "electric": {
            "normal": 1, "fire": 1, "water": 2, "electric": 0.5, "grass": 0.5, "ice": 1,
            "fighting": 1, "poison": 1, "ground": 0, "flying": 2, "psychic": 1,
            "bug": 1, "rock": 1, "ghost": 1, "dragon": 0.5, "dark": 1, "steel": 1
        },
        "grass": {
            "normal": 1, "fire": 0.5, "water": 2, "electric": 1, "grass": 0.5, "ice": 1,
            "fighting": 1, "poison": 0.5, "ground": 2, "flying": 0.5, "psychic": 1,
            "bug": 0.5, "rock": 2, "ghost": 1, "dragon": 0.5, "dark": 1, "steel": 0.5
        },
        "ice": {
            "normal": 1, "fire": 0.5, "water": 0.5, "electric": 1, "grass": 2, "ice": 0.5,
            "fighting": 1, "poison": 1, "ground": 2, "flying": 2, "psychic": 1,
            "bug": 1, "rock": 1, "ghost": 1, "dragon": 2, "dark": 1, "steel": 0.5
        },
        "fighting": {
            "normal": 2, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 2,
            "fighting": 1, "poison": 0.5, "ground": 1, "flying": 0.5, "psychic": 0.5,
            "bug": 0.5, "rock": 2, "ghost": 0, "dragon": 1, "dark": 2, "steel": 2
        },
        "poison": {
            "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 2, "ice": 1,
            "fighting": 1, "poison": 0.5, "ground": 0.5, "flying": 1, "psychic": 1,
            "bug": 1, "rock": 0.5, "ghost": 0.5, "dragon": 1, "dark": 1, "steel": 0
        },
        "ground": {
            "normal": 1, "fire": 2, "water": 1, "electric": 2, "grass": 0.5, "ice": 1,
            "fighting": 1, "poison": 2, "ground": 1, "flying": 0, "psychic": 1,
            "bug": 0.5, "rock": 2, "ghost": 1, "dragon": 1, "dark": 1, "steel": 2
        },
        "flying": {
            "normal": 1, "fire": 1, "water": 1, "electric": 0.5, "grass": 2, "ice": 1,
            "fighting": 2, "poison": 1, "ground": 1, "flying": 1, "psychic": 1,
            "bug": 2, "rock": 0.5, "ghost": 1, "dragon": 1, "dark": 1, "steel": 0.5
        },
        "psychic": {
            "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1,
            "fighting": 2, "poison": 2, "ground": 1, "flying": 1, "psychic": 0.5,
            "bug": 1, "rock": 1, "ghost": 1, "dragon": 1, "dark": 0, "steel": 0.5
        },
        "bug": {
            "normal": 1, "fire": 0.5, "water": 1, "electric": 1, "grass": 2, "ice": 1,
            "fighting": 0.5, "poison": 0.5, "ground": 1, "flying": 0.5, "psychic": 2,
            "bug": 1, "rock": 1, "ghost": 0.5, "dragon": 1, "dark": 2, "steel": 0.5
        },
        "rock": {
            "normal": 1, "fire": 2, "water": 1, "electric": 1, "grass": 1, "ice": 2,
            "fighting": 0.5, "poison": 1, "ground": 0.5, "flying": 2, "psychic": 1,
            "bug": 2, "rock": 1, "ghost": 1, "dragon": 1, "dark": 1, "steel": 0.5
        },
        "ghost": {
            "normal": 0, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1,
            "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 2,
            "bug": 1, "rock": 1, "ghost": 2, "dragon": 1, "dark": 0.5, "steel": 0.5
        },
        "dragon": {
            "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1,
            "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 1,
            "bug": 1, "rock": 1, "ghost": 1, "dragon": 2, "dark": 1, "steel": 0.5
        },
        "dark": {
            "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1,
            "fighting": 0.5, "poison": 1, "ground": 1, "flying": 1, "psychic": 2,
            "bug": 1, "rock": 1, "ghost": 2, "dragon": 1, "dark": 0.5, "steel": 0.5
        },
        "steel": {
            "normal": 1, "fire": 0.5, "water": 0.5, "electric": 0.5, "grass": 1, "ice": 2,
            "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 1,
            "bug": 1, "rock": 2, "ghost": 1, "dragon": 1, "dark": 1, "steel": 0.5
        }
    }



    calculateTypeMultipliers(defenderTypes: Type[]): Map<Type, number> {
        const multipliers = new Map<Type, number>();

        const allTypes: Type[] = Object.keys(this.typeChart) as Type[];

        for (const attackingType of allTypes) {
            let multiplier = 1;
            for (const defenderType of defenderTypes) {
                const chart = this.typeChart[attackingType];
                const typeEffect = chart[defenderType] ?? 1;
                multiplier *= typeEffect;
            }
            multipliers.set(attackingType, multiplier);
        }
        return multipliers;
    }

    calculateAttackMultipliers(attackingType: Type): Map<Type, number> {
        const multipliers = new Map<Type, number>();
        const defenderTypes = Object.keys(this.typeChart[attackingType]) as Type[];

        for (const defenderType of defenderTypes) {
            const multiplier = this.typeChart[attackingType][defenderType] ?? 1;
            multipliers.set(defenderType, multiplier);
        }

        return multipliers;
    }

}
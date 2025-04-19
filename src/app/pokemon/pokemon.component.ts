import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../models/pokemon.model';
import { PokeAPIService } from '../services/poke-api.service';
import { Router, RouterLink } from '@angular/router';
import { SharePokemonService } from '../services/share-pokemon.service';

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

    constructor(private pokeAPIService: PokeAPIService, private sharePokemonService : SharePokemonService, private router: Router) {}


    ngOnInit(): void {
        this.pokemon.moves.forEach(async move => {
            this.movesAndTypes = await this.pokeAPIService.getMovesType(this.pokemon.moves);
        });

    }

    openDetailedView(pokemon: Pokemon) {
        this.sharePokemonService.changePokemon(pokemon)
        this.sharePokemonService.changeMovesAndTypes(this.movesAndTypes)
        this.router.navigateByUrl('pokemon');
    }
}

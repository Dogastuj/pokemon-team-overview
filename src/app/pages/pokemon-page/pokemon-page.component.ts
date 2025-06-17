import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon.model';
import { SharePokemonService } from '../../services/share-pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent {

  pokemon!: Pokemon;
  movesAndTypes!: Record<string, string>;

  constructor(
    private sharePokemonService: SharePokemonService,
    private router: Router
  ) { }

  async ngOnInit() {
    if (this.sharePokemonService.isPokemonShared()) {
      this.pokemon = this.sharePokemonService.getPokemon();

      this.movesAndTypes = this.sharePokemonService.getMovesAndTypes();
    } else {
      this.router.navigateByUrl('');
    }
  }

  openMoveDetails(moveName: string) {
    const moveUrlName = moveName.toLowerCase().replace(/\s+/g, '-');
    this.router.navigateByUrl('/move/' + moveUrlName);
  }


}

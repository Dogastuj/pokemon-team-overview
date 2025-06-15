import { Component, OnInit } from '@angular/core';
import { SharePokepasteService } from '../services/share-pokepaste.service';
import { InterpretPokepasteService } from '../services/interpret-pokepaste.service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { Router } from '@angular/router';
import { SaveTeamsService } from '../services/save-teams.service';

@Component({
  selector: 'app-pokepaste',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokepaste-component.html',
  styleUrls: ['./pokepaste-component.scss']
})
export class PokepasteComponent implements OnInit {
  pokepaste!: string;
  team!: Pokemon[];

  constructor(
    private sharePokpasteService: SharePokepasteService,
    private interpretPokepasteService: InterpretPokepasteService,
    private saveTeamsService: SaveTeamsService,
    private router: Router
  ) { }

  async ngOnInit() {
    if (this.sharePokpasteService.isPokepasteShared()) {
      this.pokepaste = this.sharePokpasteService.getPaste();
      this.team = await this.interpretPokepasteService.interpretPokepaste(this.pokepaste);
    } else {
      this.router.navigateByUrl('');
    }

    const imagesTable: string[] = [];
    this.team.forEach(p => {
      if (p.imageUrl) {
        imagesTable.push(p.imageUrl!);
      }
    });
    this.saveTeamsService.saveTeam(this.pokepaste, imagesTable);
  }

  copyPokepaste() {
    navigator.clipboard.writeText(this.pokepaste);
  }


}

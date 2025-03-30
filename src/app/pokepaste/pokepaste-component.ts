import { Component } from '@angular/core';
import { SharePokepasteService } from '../services/share-pokepaste.service'; 
import { InterpretPokepasteService } from '../services/interpret-pokepaste.service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonComponent } from "../pokemon/pokemon.component";



@Component({
  selector: 'app-pokepaste',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './pokepaste-component.html',
  styleUrl: './pokepaste-component.scss'
})

export class PokepasteComponent {
  
onPokemonCardClick(_t2: Pokemon) {
  throw new Error('Method not implemented.');
}
  
  pokepaste!: string;
  team!: Pokemon[];

  constructor(private sharePokpasteService: SharePokepasteService, private interpretPokepasteService: InterpretPokepasteService) { 
    this.pokepaste = this.sharePokpasteService.getPaste();
    this.team = this.interpretPokepasteService.interpretPokepaste(this.pokepaste)
  }

  onInit() {
    
  }

}

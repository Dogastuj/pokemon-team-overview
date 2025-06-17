import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '../services/poke-api.service';
import { take } from 'rxjs/operators';
import { TypesRelationsService } from '../services/types-relations.service';
import { Type } from '../models/types.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-move-page',
  imports: [CommonModule],
  templateUrl: './move-page.component.html',
  styleUrl: './move-page.component.scss'
})
export class MovePageComponent {
  moveInfo?: any;
  typeMultipliers: Map<Type, number> = new Map();


  constructor(private readonly route: ActivatedRoute, private readonly pokeApiService: PokeAPIService, private readonly typesRelationsService: TypesRelationsService) {}

  ngOnInit(): void {
    const moveName = this.route.snapshot.paramMap.get('name')!;
    this.pokeApiService.getMoveInfo(moveName).pipe(take(1)).subscribe(data => {
      this.moveInfo = data;

      const moveType = data.type.name as Type;
      if (data.damage_class.name !== 'status') {
        this.typeMultipliers = this.typesRelationsService.calculateAttackMultipliers(moveType);
      }
    });
  }
}



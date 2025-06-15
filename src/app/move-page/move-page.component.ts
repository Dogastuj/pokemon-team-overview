import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '../services/poke-api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-move-page',
  imports: [],
  templateUrl: './move-page.component.html',
  styleUrl: './move-page.component.scss'
})
export class MovePageComponent {
  moveInfo?: any;

  constructor(private readonly route: ActivatedRoute, private readonly pokeApiService: PokeAPIService) {}

  ngOnInit(): void {
    const moveName = this.route.snapshot.paramMap.get('name')!;
    this.pokeApiService.getMoveInfo(moveName).pipe(take(1)).subscribe(data => {
      this.moveInfo = data;
    });
    
  }
}



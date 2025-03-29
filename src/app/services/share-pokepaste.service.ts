import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharePokepasteService {

  private pokepaste: string = '';
  private isShared: boolean = false;

  constructor() { }

  changePaste(pokepaste: string) {
    this.pokepaste = pokepaste;
    this.isShared = true;
  }

  getPaste(): string {
    return this.pokepaste;
  }

}

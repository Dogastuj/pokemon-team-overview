export class Pokemon {
  
  name: string | null = null;
  nickname: string | null = null;
  imageUrl: string | null = null;
  ability: string | null = null;
  nature: string | null = null;
  heldItem: string | null = null;
  teraType: string | null = null;
  baseStats: { [key: string]: number } = { HP: 0, Atk: 0, Def: 0, SpA: 0, SpD: 0, Spe: 0 };
  ivs: { [key: string]: number } = { HP: 31, Atk: 31, Def: 31, SpA: 31, SpD: 31, Spe: 31 };
  evs: { [key: string]: number } = { HP: 0, Atk: 0, Def: 0, SpA: 0, SpD: 0, Spe: 0 };
  
  moves: string[] = [];
  level: number = 100;
  shiny: boolean = false;
  
  constructor() {}

  getPokemonInfo(): string {
    return `
      Name: ${this.name || 'None'}
      Nickname: ${this.nickname || 'None'}
      Talent: ${this.ability || 'None'}
      Nature: ${this.nature || 'None'}
      Held Item: ${this.heldItem || 'None'}
      Tera Type: ${this.teraType || 'None'}
      Base Stats: ${JSON.stringify(this.baseStats)}
      IVs: ${JSON.stringify(this.ivs)}
      EVs: ${JSON.stringify(this.evs)}
      Moves: ${this.moves.join(', ') || 'None'}
    `;
  }
}

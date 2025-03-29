export class Pokemon {
  
  name: string | null = null;
  nickname: string | null = null;
  talent: string | null = null;
  nature: string | null = null;
  heldItem: string | null = null;
  teraType: string | null = null;
  baseStats: { [key: string]: number } = { hp: 0, attack: 0, defense: 0, speed: 0 };
  ivs: { [key: string]: number } = { hp: 0, attack: 0, defense: 0, speed: 0 };
  evs: { [key: string]: number } = { hp: 0, attack: 0, defense: 0, speed: 0 };
  moves: string[] = [];
  
  constructor() {}

  getPokemonInfo(): string {
    return `
      Name: ${this.name || 'None'}
      Nickname: ${this.nickname || 'None'}
      Talent: ${this.talent || 'None'}
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

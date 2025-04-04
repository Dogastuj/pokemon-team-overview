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

  getEVsHTMLText(): string {
    var text = "";
    for(var ev in this.evs){
      if(this.evs[ev] !== 0){
        if(text.length > 0){
          text += " / "
        }
        text += this.evs[ev] + " " + ev;
      }
    }
    return text;
  }

  getIVsHTMLText(): string {
    var text = "";
    for(var iv in this.ivs){
      if(this.ivs[iv] !== 31){
        if(text.length > 0){
          text += " / "
        }
        text += this.ivs[iv] + " " + iv;
      }
    }
    return text;
  }
}

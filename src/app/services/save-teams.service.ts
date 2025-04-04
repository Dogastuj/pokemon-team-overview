import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SaveTeamsService {


    saveTeam(pokepaste : string, imgPokemons : string[]) {
      if(!this.teamAlreadySaved(pokepaste)){
        if (localStorage.getItem('nbTeams') == null) {
          localStorage.setItem('nbTeams', '0');
        }
        var nbTeams = parseInt(localStorage.getItem('nbTeams')!, 10) + 1;
        localStorage.setItem('pokepaste_team'+ nbTeams, pokepaste);
        localStorage.setItem('img_team'+ nbTeams, JSON.stringify(imgPokemons));
        localStorage.setItem('nbTeams', nbTeams.toString());
      }
    }

    loadTeam(id : number) : string {
        if (localStorage.getItem('nbTeams') == null) {
          throw new Error("No teams saved");
        } else if (id > parseInt(localStorage.getItem('nbTeams')!)) {
          throw new Error("No team with this id");
        }
        return localStorage.getItem('pokepaste_team'+ id)!;
    }

    getAllTeamsPreviews(): string[][] {
        const nbTeamsStr = localStorage.getItem('nbTeams');
        console.log("found "+ nbTeamsStr + " teams in local storage");
        if (nbTeamsStr === null) {
          throw new Error("No teams saved");
        }
      
        const nbTeams = parseInt(nbTeamsStr, 10);
        const teams: string[][] = [];
      
        for (let i = 1; i <= nbTeams; i++) {
          const imgStr = localStorage.getItem('img_team' + i);
          console.log("img :");
          console.log(imgStr);
          if (imgStr) {
            const imgArray: string[] = JSON.parse(imgStr);
            teams.push(imgArray);
            }
        }
      
        return teams;
      }

      teamAlreadySaved(pokepaste : string) : boolean {
        const nbTeamsStr = localStorage.getItem('nbTeams');
        if (nbTeamsStr === null) {
          return false;
        }
      
        const nbTeams = parseInt(nbTeamsStr, 10);
      
        for (let i = 1; i <= nbTeams; i++) {
          const savedPokepaste = localStorage.getItem('pokepaste_team' + i);
          if (savedPokepaste === pokepaste) {
            return true;
          }
        }
      
        return false;
      }
      


}



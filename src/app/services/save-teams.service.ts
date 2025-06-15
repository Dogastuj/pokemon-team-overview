import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SaveTeamsService {
  constructor(private router: Router) { }


  saveTeam(pokepaste: string, imgPokemons: string[]) {
    if (!this.teamAlreadySaved(pokepaste)) {
      if (localStorage.getItem('nbTeams') == null) {
        localStorage.setItem('nbTeams', '0');
      }
      var nbTeams = parseInt(localStorage.getItem('nbTeams')!, 10) + 1;
      localStorage.setItem('pokepaste_team' + nbTeams, pokepaste);
      localStorage.setItem('img_team' + nbTeams, JSON.stringify(imgPokemons));
      localStorage.setItem('nbTeams', nbTeams.toString());
    }
  }

  loadTeam(id: number): string {
    if (localStorage.getItem('nbTeams') == null) {
      throw new Error("No teams saved");
    } else if (id > parseInt(localStorage.getItem('nbTeams')!)) {
      throw new Error("No team with this id");
    }
    return localStorage.getItem('pokepaste_team' + id)!;
  }

  getAllTeamsPreviews(): string[][] {
    const nbTeamsStr = localStorage.getItem('nbTeams');
    console.log("found " + nbTeamsStr + " teams in local storage");
    if (nbTeamsStr === null) {
      this.router.navigateByUrl('');
      return [];
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

  teamAlreadySaved(pokepaste: string): boolean {
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

  deleteTeam(teamId: number) {
    const nbTeamsStr = localStorage.getItem('nbTeams');
    if (nbTeamsStr === null) {
      throw new Error("No teams saved");
    }
    const nbTeams = parseInt(nbTeamsStr, 10);
    if (teamId < 1 || teamId > nbTeams) {
      throw new Error("No team with this id");
    }

    // Remove the specified team
    localStorage.removeItem('pokepaste_team' + teamId);
    localStorage.removeItem('img_team' + teamId);

    // Shift subsequent teams up to fill the gap
    for (let i = teamId + 1; i <= nbTeams; i++) {
      const pokepaste = localStorage.getItem('pokepaste_team' + i);
      const img = localStorage.getItem('img_team' + i);

      if (pokepaste !== null) {
        localStorage.setItem('pokepaste_team' + (i - 1), pokepaste);
      } else {
        localStorage.removeItem('pokepaste_team' + (i - 1));
      }

      if (img !== null) {
        localStorage.setItem('img_team' + (i - 1), img);
      } else {
        localStorage.removeItem('img_team' + (i - 1));
      }
    }

    // Remove the last team slot (now duplicated)
    localStorage.removeItem('pokepaste_team' + nbTeams);
    localStorage.removeItem('img_team' + nbTeams);

    // Update the team count
    localStorage.setItem('nbTeams', (nbTeams - 1).toString());
  }




}



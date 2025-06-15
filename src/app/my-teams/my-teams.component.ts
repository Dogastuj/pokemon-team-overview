import { Component } from '@angular/core';
import { SaveTeamsService } from '../services/save-teams.service';
import { CommonModule } from '@angular/common';
import { TeamPreviewComponent } from '../team-preview/team-preview.component';

@Component({
  selector: 'app-my-teams',
  imports: [CommonModule, TeamPreviewComponent],
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.scss']
})
export class MyTeamsComponent {
  teams: string[][] = [];

  constructor(private saveTeamsService: SaveTeamsService) {
    this.setTeams();
  }

  setTeams(){
    this.teams = this.saveTeamsService.getAllTeamsPreviews();
  }
}

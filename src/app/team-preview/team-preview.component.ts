import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharePokepasteService } from '../services/share-pokepaste.service'; 
import { SaveTeamsService } from '../services/save-teams.service';

@Component({
  selector: 'app-team-preview',
  imports: [CommonModule],
  templateUrl: './team-preview.component.html',
  styleUrls: ['./team-preview.component.scss']
})
export class TeamPreviewComponent {

  @Input() team!: string[];
  @Input() teamId!: number;

  @Output() refreshTeams = new EventEmitter<void>();

  constructor(private router: Router, private sharePokpasteService: SharePokepasteService, private saveTeamsService: SaveTeamsService) { }

  teamClicked() {
    this.sharePokpasteService.changePaste(this.saveTeamsService.loadTeam(this.teamId));


      this.router.navigateByUrl('team-overview');
    }

    deleteTeam() {
      this.saveTeamsService.deleteTeam(this.teamId);
      this.refreshTeams.emit();
      
    }
}

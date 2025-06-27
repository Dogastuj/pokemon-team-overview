import { Component, Inject } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { SharePokepasteService } from '../../services/share-pokepaste.service';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {


  constructor(private router: Router, 
              private sharePokpasteService: SharePokepasteService
            ) { }

  sendInput(pokepaste: string) {
    if (pokepaste.length > 0 && !pokepaste.endsWith('\n')) {
      pokepaste += '\n';
    }
      this.sharePokpasteService.changePaste(pokepaste);


      this.router.navigateByUrl('team-overview');

    }

    autoResize(textarea: HTMLTextAreaElement) {
      textarea.style.height = "auto"; 
      textarea.style.height = textarea.scrollHeight + "px"; 
    }
  
}



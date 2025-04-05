import { Component, Inject } from '@angular/core';
import { SharePokepasteService } from '../services/share-pokepaste.service'; 
import { Router, RouterLink } from '@angular/router';


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
      this.sharePokpasteService.changePaste(pokepaste);


      this.router.navigateByUrl('team-overview');

    }

    autoResize(textarea: HTMLTextAreaElement) {
      textarea.style.height = "auto"; 
      textarea.style.height = textarea.scrollHeight + "px"; 
    }
  
}



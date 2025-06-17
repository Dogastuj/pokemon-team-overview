import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  darkThemeEnabled: boolean = false;

  toggleTheme() {
    if(this.darkThemeEnabled){
      if(!document.body.classList.contains('dark')){
        document.body.classList.add('dark');
      }
    } else {
      if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
      }
    }
    this.darkThemeEnabled = !this.darkThemeEnabled;
  }
}

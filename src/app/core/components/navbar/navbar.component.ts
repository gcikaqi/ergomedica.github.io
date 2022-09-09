import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchThemeService } from '@shared/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

type Routes = {
  name: string;
  url: string;
};

@Component({
  selector: 'app-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isDarkMode: boolean = false;
  public goToIndex = '';
  public showMenu = false;
  public routes: Routes[] = [
    {
      name: 'Home',
      url: '#index',
    },
    {
      name: 'Chi siamo',
      url: '#about-us',
    },
    {
      name: 'Servizi',
      url: '#servizi',
    },
    {
      name: 'Contatti',
      url: '#contacts',
    },
  ];
  private unSubscribed = new Subject<void>();

  constructor(private router: Router, private switchThemeService: SwitchThemeService) {
    this.switchThemeService.isDarkMode$.pipe(takeUntil(this.unSubscribed)).subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  public scroll(route: string): void {
    // this.showMenu = false;
    const currentRoute = this.router.url;
    const menuButton = document.querySelector('#menu-button') as HTMLButtonElement;
    if (menuButton) {
      menuButton.click();
    }
    if (!currentRoute.includes('index')) {
      this.router.navigate(['index']);
      setTimeout(() => {
        document.querySelector(route)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }, 50);
    } else {
      document.querySelector(route)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  refresh(): void {
    window.location.reload();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwitchThemeService {
  public isDarkMode = true;
  public isDarkMode$ = new BehaviorSubject<boolean>(false);

  public checkActivateTheme(): void {
    if (localStorage.theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    } else if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      this.isDarkMode = false;
    }
    this.isDarkMode$.next(this.isDarkMode);
  }

  public changeActivateTheme(): void {
    if (localStorage.theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      this.isDarkMode = false;
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    }
    this.isDarkMode$.next(this.isDarkMode);
  }
}

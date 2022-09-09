import { Component } from '@angular/core';
import { SwitchThemeService } from '@shared/services';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ERGOMEDICA';
  showScrollButton = false;

  constructor(private switchThemeService: SwitchThemeService) {
    document.addEventListener('scroll', () => {
      this.showScrollButton = this.getScrollingElement() > 600;
    });
  }

  ngOnInit(): void {
    this.switchThemeService.checkActivateTheme();
    AOS.init();
  }

  private getScrollingElement(): number {
    return document.scrollingElement!.scrollTop || document.documentElement.scrollTop;
  }
}

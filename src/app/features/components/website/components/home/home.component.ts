import { Component } from '@angular/core';
import { SwitchThemeService } from '@shared/services';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public switchThemeServices: SwitchThemeService) {}
}

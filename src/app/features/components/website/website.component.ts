import { AfterViewInit, Component } from '@angular/core';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-website',
  styleUrls: ['./website.component.scss'],
  templateUrl: './website.component.html',
})
export class WebsiteComponent implements AfterViewInit {
  constructor(private navigationService: NavigationService) {}

  ngAfterViewInit(): void {
    if (this.navigationService.getNavigateId() !== '') {
      const element = document.querySelector(`#${this.navigationService.getNavigateId()}`) as HTMLDivElement;
      if (element) {
        element.scrollIntoView();
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '@core/services';

@Component({
  selector: 'app-back-button',
  styleUrls: ['./back-button.component.scss'],
  templateUrl: './back-button.component.html',
})
export class BackButtonComponent implements OnInit {
  constructor(private router: Router, private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.setNavigateId(this.router.url.split('/')[1]);
  }

  back(): void {
    this.router.navigate(['']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  styleUrls: ['./scroll-top.component.scss'],
  templateUrl: './scroll-top.component.html',
})
export class ScrollTopComponent {
  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

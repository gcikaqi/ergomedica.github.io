import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigateToId: string = '';

  setNavigateId(id: string): void {
    this.navigateToId = id;
  }

  getNavigateId(): string {
    return this.navigateToId;
  }
}

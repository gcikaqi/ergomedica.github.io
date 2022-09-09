import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { sharedComponents } from '@shared/components';
import { SwitchThemeService } from '@shared/services';

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule],
  exports: [sharedComponents],
  providers: [SwitchThemeService],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { coreComponents } from '@core/components';

@NgModule({
  declarations: [coreComponents],
  exports: [coreComponents],
  imports: [CommonModule],
})
export class CoreModule {}

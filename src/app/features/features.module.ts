import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { websiteComponents } from '@features/components/website/components';
import { WebsiteComponent } from '@features/components/website/website.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: 'index', component: WebsiteComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  declarations: [WebsiteComponent, websiteComponents],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), CoreModule],
})
export class FeaturesModule {}

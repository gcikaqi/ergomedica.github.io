import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/features.module').then((m) => m.FeaturesModule) },
  { path: '**', redirectTo: '' },
];

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

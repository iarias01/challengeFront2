import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'festival/form',
        loadChildren: () =>
          import('./pages/form-festival/form-festival.module').then((m) => m.FormFestivalModule),
      },
      {
        path: 'festival/form/:id',
        loadChildren: () =>
          import('./pages/form-festival/form-festival.module').then((m) => m.FormFestivalModule),
      },
      {
        path: 'festival/:id',
        loadChildren: () =>
          import('./pages/festival/festival.module').then((m) => m.FestivalModule),
      },
      {
        path: 'festival',
        redirectTo: 'festival/form',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

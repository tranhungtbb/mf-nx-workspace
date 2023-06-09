import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
];

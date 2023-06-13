import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] =
[
    {
        path: 'about',
        loadChildren: () => loadRemoteModule('about', './Module').then((m) => m.RemoteEntryModule),
    },
    {
        path: 'about/:id/:key',
        loadChildren: () => loadRemoteModule('about', './Module2').then((m) => m.RemoteEntryModule),
    }
];
import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import {WelcomeComponent } from '@fast-food-app/share'

export const remoteRoutes: Route[] = [
  { 
    path: '', 
    component: RemoteEntryComponent
  }
];

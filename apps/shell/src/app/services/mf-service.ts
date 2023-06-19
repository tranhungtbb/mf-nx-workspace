import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Microfrontend } from '../models/microfrontend.model';
import { buildRoutes } from '../utils/router-utils';

@Injectable({ providedIn: 'root' })
export class MfService {
  microfrontends: Microfrontend[] | undefined;

  constructor(private router: Router) {}

  /*
   * Initialize is called on app startup to load the initial list of
   * remote microfrontends and configure them within the router
   */
  initialise(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.microfrontends = this.loadConfig();
      this.router.resetConfig(buildRoutes(this.microfrontends));
      resolve();
    });
  }

  /*
   * This is just an hardcoded list of remote microfrontends, but could easily be updated
   * to load the config from a database or external file
   */
  loadConfig(): Microfrontend[] {
    return [
      {
        // For Loading
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'about',
        exposedModule: 'AboutModule',
        displayName: 'About',
        routePath: 'about',
        ngModuleName: 'AboutModule',
      },
      {
        // For Loading
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'news',
        exposedModule: 'NewsModule',
        displayName: 'News',
        routePath: 'news',
        ngModuleName: 'NewsModule',
      }
    ];
  }
}

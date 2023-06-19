import { AfterViewInit, Component, Injector, OnInit, ViewChild, ViewContainerRef, inject, ɵcreateInjector } from '@angular/core';
import { loadRemoteModule } from '../utils/federation-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  remoteEntry : string = 'http://localhost:4203/remoteEntry.js'
  remoteName: string =  'news'
  exposedModule: string =  'NewsModule'
  displayName: string =  'News'

  @ViewChild('federatedComponent', { read: ViewContainerRef }) federatedComponent: ViewContainerRef;

  injector = inject(Injector)

  ngOnInit(): void {
    loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule,
    }).then(federated => {
      const component = federated[this.exposedModule].exports.find(e => e?.name === "NewDetailComponent");
      if(component){
        this.federatedComponent.createComponent(
          component,
          { injector: ɵcreateInjector(federated[this.exposedModule], this.injector) },
        );
      }
    })

  }

  ngAfterViewInit(): void {
  }
}

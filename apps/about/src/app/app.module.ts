import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from '@fast-food-app/share';
import { RemoteEntryComponent } from './remote-entry/entry.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
        },
        {
          path : "demo",
          component : RemoteEntryComponent
        }
      ]
    ),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

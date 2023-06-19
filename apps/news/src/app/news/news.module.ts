import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewsService } from '../news.service';
import { HttpClientModule } from '@angular/common/http';
import {WelcomeComponent} from '@fast-food-app/share'

@NgModule({
  declarations: [NewsComponent, NewDetailComponent, WelcomeComponent,],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(
      [
        { path: '', component : NewsComponent },
        { path: 'detail/:id', component: NewDetailComponent },
      ]
    )
  ],
  providers: [NewsService],
})
export class NewsModule {
  static exports = [NewsComponent, NewDetailComponent];
}

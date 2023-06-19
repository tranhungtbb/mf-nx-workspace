import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'fast-food-app-news',
  templateUrl: './news.component.html',
  styleUrls : [ './news.component.scss' ]
})
export class NewsComponent implements OnInit {

  news : any[] | undefined
  newService = inject(NewsService)
  ngOnInit(): void{
    this.newService.gets().subscribe(res => {
      this.news = res?.result?.items
      if(this.news){
        this.news = this.news.map(item => {
          return { ... item , image : `http://eatfit.com.vn${ item.image}`}
        })
      }
    })
  }

}

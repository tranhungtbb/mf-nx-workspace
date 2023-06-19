import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fast-food-app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls : [ './new-detail.component.scss' ]
})
export class NewDetailComponent implements OnInit {

  model : any

  constructor(private activatedRouter : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      console.log(params)
    })

    this.model = {
      "title": "3 Bước Làm Bún Gạo Lứt Lườn Ngỗng Hun Khói Đơn Giản",
      "slug": "3-buoc-lam-bun-gao-lut-luon-ngong-hun-khoi-đon-gian",
      "description": "Gạo lứt có lớp cám bao bên ngoài nên giàu dinh dưỡng hơn gạo trắng thông thường. Vì lý do này, các món ăn từ gạo lứt thường rất giàu chất dinh dưỡng, và đặc biệt bún gạo lứt rất dễ ăn và có giá trị dinh dưỡng cao. Và sau đây, Mr.ECO xin giới thiệu món bún gạo lứt lườn ngỗng hun khói.",
      "content": null,
      "index": 0,
      "image": "http://eatfit.com.vn/Upload/20230517000318-luon-ngong-tphcm-768x768.jpg",
      "categoryId": 0,
      "category": "Fruit and vegetables.",
      "isActive": true,
      "creationTime": "2023-06-03T11:07:09.1442787",
      "id": 2
    }
  }
}

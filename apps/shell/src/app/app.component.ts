import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@fast-food-app/share';

@Component({
  selector: 'fast-food-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
 
  title = 'shell';
  router = inject(Router)
  authService = inject(AuthService)

  ngOnInit(): void {
    this.authService.login$.subscribe(res => { console.log('shell app : data from service',res) })
  }

  onClick()
  {
    this.router.navigate(['about', 1, "mf"]);
  }

  sendDataWithEvent()
  {
    const event = new CustomEvent('sendDatFormHost', {
      detail : { id : 123, key : "mf" },
    });
    window.dispatchEvent(event);
  }

  login(){
    this.authService.login('hungtd', '12345')
  }
}

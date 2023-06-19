import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, take } from 'rxjs';
import { AuthService } from '@fast-food-app/share';

@Component({
  selector: 'fast-food-app-about-entry',
  templateUrl : 'entry.comonent.html',
})
export class RemoteEntryComponent implements OnInit {
  activatedRouter = inject(ActivatedRoute)
  authService = inject(AuthService)
  ngOnInit(): void {
    
    fromEvent(window, 'sendDatFormHost')
      .pipe()
      .subscribe((e) => {
        console.log('From Host', e);
      });

    this.authService.login$.subscribe(res => { console.log('data from service', res) })
  }

}

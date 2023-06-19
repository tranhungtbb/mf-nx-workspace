import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, AfterViewInit {

    @Input() title : string | undefined

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
    }
}

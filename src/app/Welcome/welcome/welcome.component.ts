import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations:[
      trigger('enterState', [
        state('void', style({
          transform: 'translateX(-100%)',
          opacity:0
        })),
        transition(':enter', [
          animate(500, style({
            transform: 'translateX(0)',
            opacity:1
          }))
        ])
      ])
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

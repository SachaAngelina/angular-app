import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>I\'m an Alert ! èwé</p>' ,
  styles: [`
    p {
      padding: 20px;
      border: 2px dashed #ff334b;
      border-radius: 5px;
      color: #ff334b;
      background-color: #fdcbd4;
      font-weight: bold;
      font-size: x-large;
      text-align: center;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

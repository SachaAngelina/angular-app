import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus:string = 'No server was created. Y-Y';
  serverName:string = '';
  serverCreated: boolean = false;
  servers: Array<string> = ['First One', 'First Two'];


  constructor() {
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  buttonEnable():boolean {
    return this.serverName.trim() === "";
  }
}

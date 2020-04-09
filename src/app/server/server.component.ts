import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId:number = 42.;
  serverStatus:string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus():string{
    return this.serverStatus;
  }

  getClass():string{
    return (this.serverStatus === 'online') ? "status-online" : "status-offline";
  }


  ngOnInit(): void {
  }

}

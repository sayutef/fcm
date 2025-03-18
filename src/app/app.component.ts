import { Component, OnInit } from '@angular/core';
import { FcmService } from './fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  temperatura: number = 18;
  ritmo_cardiaco: number = 180;
  any: any;
  isCollapsed = false;

  constructor(
    private fcmService: FcmService
  ) {}

  ngOnInit(): void {

    this.fcmService.solicitarPermiso();

    this.fcmService.recibirMensaje();

    this.fcmService.obtenerToken();
  }

}

import { Component, OnInit } from '@angular/core';
import { FcmService } from './fcm.service';
import { HeartService } from './heart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(
    private fcmService: FcmService,
    private heartService: HeartService
  ) {}

  temperatura: number = 18;
  ritmo_cardiaco: number = 180;
  any: any;
  isCollapsed = false;
  token : string = '';

  ngOnInit(): void {
    this.fcmService.solicitarPermiso();
    this.fcmService.recibirMensaje();
    this.fcmService.obtenerToken();
  }

  realizarPeticion(): void {
    const title = "Ritmo cardiaco"
    const cuerpo = "Tu ritmo cardiaco está en riesgo"
    this.token = this.fcmService.obtenerTokenCliente();

    this.heartService.enviarInformacionNotification(this.token, title, cuerpo).subscribe(
      (res) => {
        console.log("Petición hecha exitosamente");
      },
      (err) => {
        console.log(err);
      }
    )

  }

}
// src/app/alert.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private http: HttpClient) {}

  serverUrl = 'http://localhost:8081/webHook';

  enviarInformacionNotification(token: string, cuerpo: string): Observable<any> {
    const informacion = {
      to: token,
      notification: {
        title: "Alerta",
        body: cuerpo,
      },
    };

    console.log("Esto se envía al servidor:", informacion);

    return this.http.post(this.serverUrl, informacion);
  }
}

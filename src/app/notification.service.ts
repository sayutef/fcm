// src/app/alert.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private http: HttpClient) {}

  serverUrl = 'http://localhost:8080/webHook';

  Alerta(token: string, cuerpo: string): Observable<any> {
    const payload = {
      to: token,
      notification: {
        title: "Alerta",
        body: cuerpo,
      },
    };

    console.log("Esto se envía al servidor:", payload);

    return this.http.post(this.serverUrl, payload);
  }
}

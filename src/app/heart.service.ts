import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeartService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/sensors" 

  enviarInformacionNotification(token: string, titulo: string, cuerpo: string): Observable<any>{
    
    const informacion = {
      token: token,
      titulo: titulo,
      cuerpo: cuerpo
    }

    return this.http.post(this.url, informacion)

  }
}
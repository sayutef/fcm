// src/app/fcm.service.ts
import { Injectable } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { firebaseConfig, vapidKey } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FcmService {
  private messaging;
  private token: string = ""

  constructor() {

    const app = initializeApp(firebaseConfig);
    this.messaging = getMessaging(app);
  }

  solicitarPermiso() {
    console.log('Solicitando permiso...');
    Notification.requestPermission().then((permiso) => {
      if (permiso === 'granted') {
        console.log('Permiso para notificaciones concedido');
        this.obtenerToken();
      } else {
        console.log('No se pudo obtener el permiso para notificaciones.');
      }
    });
  }

  obtenerToken() {
    getToken(this.messaging, {
      vapidKey: vapidKey,
    })
      .then((tokenActual) => {
        if (tokenActual) {
          console.log('Token FCM:', tokenActual);
          this.token = tokenActual;
          console.log("Copiar:", this.token);
        } else {
          console.log(
            'No hay un token de registro disponible. Solicite permiso para generar uno.'
          );
        }
      })
      .catch((error) => {
        console.error('Error al obtener el token FCM:', error);
      });
  }

  obtenerTokenCliente(): string {
    return this.token;
  }

  recibirMensaje() {
    onMessage(this.messaging, (mensaje) => {
      console.log('Mensaje recibido:', mensaje);

      if (mensaje.notification?.title && mensaje.notification?.body) {
        this.mostrarNotificacion(
          mensaje.notification.title,
          mensaje.notification.body
        );
      } else {
        console.error('Mensaje inválido');
      }
    });
  }

  private mostrarNotificacion(titulo: string, cuerpo: string) {
    if (Notification.permission === 'granted') {
      new Notification(titulo, {
        body: cuerpo,
        icon: '',
      });
    }
  }
}

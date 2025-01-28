import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioUserService {

  constructor(private http : HttpClient) { }

  insertarUsuario(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php', usuario)
  }

  inicarSession(usuario : Usuario):Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+usuario.email+'&pwd='+usuario.pwd)
  }

// http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php
// http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php
// http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email='+user.email+'&pwd='+user.pwd
}

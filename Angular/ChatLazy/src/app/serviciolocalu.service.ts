import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class ServiciolocaluService {

  constructor(private http : HttpClient) { }

  insertarUsuario(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost/serviciosChat/insertarUsuario.php', usuario)
  }

  inicarSession(usuario : Usuario):Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost/serviciosChat/logeo.php?email='+usuario.email+'&pwd='+usuario.pwd)
  }

  leerMensajes():Observable<Mensaje[]>{
    return this.http.get<Mensaje[]>('http://localhost/serviciosChat/listadoMensajes.php')
  }

  mandarMensajeGlobal(mensaje : Mensaje):Observable <Mensaje>{
    return this.http.post<Mensaje>('http://localhost/serviciosChat/insertarMensaje.php',mensaje)
  }

  leerMensajesPrivados(email:string):Observable<Mensaje[]>{
    return this.http.get<Mensaje[]>('http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario='+email)
  }

  mandarMensajePrivado(mensaje : Mensaje):Observable <Mensaje>{
    console.log(mensaje)
    return this.http.post<Mensaje>('http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',mensaje)
  }

  obtenerListadoUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost/serviciosChat/listadoUsuarios.php')
  }

  cambiarPwd(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/EditarUsuario.php',usuario)
  }
}

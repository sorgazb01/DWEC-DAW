import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChatModule } from './chat.module';
import { ServicioUserService } from '../servicio-user.service';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from '../mensaje';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  nombreUs !: string|null

  cabecera: string [] = ['id', 'usuario', 'fecha', 'mensaje']

  dataSource = new MatTableDataSource<Mensaje>

  mensajeNuevo : Mensaje = {id:0,usuario:'',fecha:'',mensaje:'',destinatario:'Todos', activo:1}

  ngOnInit(): void {
    this.nombreUs = sessionStorage.getItem('Nombre');
    if(this.nombreUs == null){
      this.dataSource = new MatTableDataSource<Mensaje>()
    }else{
      this.httpCliente.leerMensajes().subscribe(x=>this.dataSource.data = x)
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor(private httpCliente : ServicioUserService, private route:Router){
  }

  filtar(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  cerrarSesion(){
    sessionStorage.removeItem('Nombre');
    this.nombreUs='Sesion cerrada'
    this.dataSource = new MatTableDataSource<Mensaje>()
    this.route.navigate(['login'])
  }

  aniadirMensaje() {
    this.mensajeNuevo.usuario = this.nombreUs!
    this.mensajeNuevo.fecha = new Date().toLocaleString()
    this.httpCliente.mandarMensajeGlobal(this.mensajeNuevo).subscribe()
  }

  recargar(){
    this.httpCliente.leerMensajes().subscribe(x=>this.dataSource.data = x)
  }
}

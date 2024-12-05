import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import {ServicioEmpService} from '../servicio-emp.service'

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit,AfterViewInit{

    columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','borrar', 'modificar']

    empleado ! : Empleado

    datos: Empleado[] =[]

    dataSource = new MatTableDataSource<Empleado>;

    @ViewChild(MatPaginator) paginator! : MatPaginator;
    @ViewChild(MatSort) sort ! : MatSort;

    constructor(/*public dialog: MatDialog,*/ private httpCliente: ServicioEmpService){
      this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x})
    }

    ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort

      
    }

    ngOnInit(): void {
      this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x})
    }

    buscador(event: KeyboardEvent) {
      const filtro = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filtro.trim().toLowerCase();
    }

    modificarEmpleado(arg0: any) {

    }

    eliminarEmpleado(arg0: any) {

    }

}

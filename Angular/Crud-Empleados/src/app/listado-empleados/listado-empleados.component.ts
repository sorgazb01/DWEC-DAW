import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from '../empleado';
import {ServicioEmpService} from '../servicio-emp.service'

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit{

  constructor(/*public dialog: MatDialog,*/ private httpCliente: ServicioEmpService){ }

  ngOnInit(): void {

  }

    urlString:string="http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php"

    columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','borrar', 'modificar']

    empleado ! : Empleado

    datos: Empleado[] =[]

    dataSource! : MatTableDataSource<Empleado>;

    @ViewChild(MatPaginator) paginator! : MatPaginator;
    @ViewChild(MatSort) sort ! : MatSort;

    buscador($event: KeyboardEvent) {
      throw new Error('Method not implemented.');
    }

    modificarEmpleado(arg0: any) {

      }
      eliminarEmpleado(arg0: any) {

      }

}

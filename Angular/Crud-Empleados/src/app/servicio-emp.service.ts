import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpService {

  constructor(private httpCliente:HttpClient) { }

  leerEmpleados(){
    return this.httpCliente.get<Empleado[]>("http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php")
  }
}

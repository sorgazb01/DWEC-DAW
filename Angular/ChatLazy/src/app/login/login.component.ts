import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { ServicioUserService } from '../servicio-user.service';
import { Route, Router } from '@angular/router';
import { ServiciolocaluService } from '../serviciolocalu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    formRegistro !: FormGroup;

    usuario : Usuario = {
      nombre : '',
      email : '',
      pwd : '',
      activo : 1
    }
    listadoUsuarios : Usuario[] = []

    existeU : boolean = false

    usuarioEncontrado : Usuario = {
      nombre : '',
      email : '',
      pwd : '',
      activo : 1
    }

    ngOnInit(): void {
      this.formRegistro = new FormGroup({
        email: new FormControl('', [Validators.required]),
        pwd: new FormControl('', [Validators.required])
      })

    }

    constructor(private servicioUserService: ServiciolocaluService, private route : Router) {

    }

    loguearUsuario() {
      this.servicioUserService.obtenerListadoUsuarios().subscribe(x=>{
        this.listadoUsuarios=x
        this.listadoUsuarios.forEach(user=>{
          if(user.email == this.formRegistro.value.email && user.pwd == this.formRegistro.value.pwd){
            this.usuarioEncontrado = user
            this.existeU = true
          }
        })
      })
      if (this.existeU) {
        if (this.usuarioEncontrado.activo == 1) {
          sessionStorage.setItem('nombreUs',this.usuarioEncontrado.email);
          if (this.usuarioEncontrado.email=="admin@gmail.com"){
            this.route.navigate(['admin']);
          }else{
            this.route.navigate(['chat']);
          }
        }
      }
    }
}

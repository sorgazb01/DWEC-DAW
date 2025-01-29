import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';
import { ServicioUserService } from '../servicio-user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    formRegistro !: FormGroup;

    usuario !: Usuario
    listadoUsuarios : Usuario[] = []

    ngOnInit(): void {
      this.formRegistro = new FormGroup({
        email: new FormControl('', [Validators.required]),
        pwd: new FormControl('', [Validators.required])
      })
    }

    constructor(private servicioUserService: ServicioUserService, private route : Router) {

    }

    loguearUsuario() {
      this.servicioUserService.inicarSession(this.formRegistro.value).subscribe((x) => {
        this.usuario = x[0]
      })
      sessionStorage.setItem('Nombre',this.usuario.nombre)
      this.route.navigate(['chat'])
      // console.log(this.usuario)
      // this.route.(['chat'])
    }
}

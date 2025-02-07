import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioUserService } from '../servicio-user.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServiciolocaluService } from '../serviciolocalu.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formRegistro !: FormGroup;

  usuario !: Usuario

  ngOnInit(): void {
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required]),
    })
  }

  constructor(private servicioUserService: ServiciolocaluService,private route:Router) {

  }



  registrarUsuario() {
    this.servicioUserService.insertarUsuario(this.formRegistro.value).subscribe((x:Usuario) => {
      this.usuario = x
    })
    alert("Usuario registrado correctamente")
    this.route.navigate(['login'])
  }

}

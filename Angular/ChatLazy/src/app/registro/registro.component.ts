import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioUserService } from '../servicio-user.service';
import { Usuario } from '../usuario';

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

  constructor(private servicioUserService: ServicioUserService) {

  }



  registrarUsuario() {
    this.servicioUserService.insertarUsuario(this.formRegistro.value).subscribe((x:Usuario) => {
      this.usuario = x
    })
    alert("Usuario registrado correctamente")
  }

}

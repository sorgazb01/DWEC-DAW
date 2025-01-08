import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializar el formulario con controles y validaciones
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      apellido: ['', [Validators.required, Validators.maxLength(20)]],
      visa: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(20), Validators.pattern('^\d=$')]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{10,}$')]],
    });
  }

  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.miFormulario.valid) {
      console.log('Formulario enviado correctamente');
    }
  }
    

}

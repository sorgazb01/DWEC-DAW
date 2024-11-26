import { Component } from '@angular/core';
import { FrutaModule } from '../fruta/fruta.module';
import { ServFrutaService } from '../serv-fruta.service';

@Component({
  selector: 'app-fruteria',
  templateUrl: './fruteria.component.html',
  styleUrls: ['./fruteria.component.css']
})
export class FruteriaComponent {

  fruta! : FrutaModule
  frutaSeleccionada : FrutaModule={
    id : 0,
    nombre : '',
    precio : 0,
    unidades : 0,
    imagen : ''
  }

  listaFrutas! : FrutaModule[]
  constructor (private httpCliente:ServFrutaService){
    this.httpCliente.leerFrutas().subscribe(x=>this.listaFrutas = x)
  }

  actualizarProducto() {

  }
  aniadirProducto() {

  }
}

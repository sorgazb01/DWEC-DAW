import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  euros : number = 0
  dolares : number = 0
  yenes : number = 0

  limpiar(){
    this.euros = 0
    this.dolares = 0
    this.yenes = 0
  }

  conversion(){
    this.dolares = this.euros*0.95
    this.yenes = this.euros*164
  }
}

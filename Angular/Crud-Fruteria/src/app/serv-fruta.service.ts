import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrutaModule } from './fruta/fruta.module';

@Injectable({
  providedIn: 'root'
})
export class ServFrutaService {

  constructor(private httpClient:HttpClient) { }

  leerFrutas():Observable<FrutaModule[]>{
    return this.httpClient.get<FrutaModule[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php')
  }
}

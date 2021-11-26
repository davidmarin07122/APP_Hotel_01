import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor( public peticion: HttpClient ) {
    console.log("Start api");
    
   }

   buscarHvitaciones():Observable<any>{

      console.log("buscando");

      return this.peticion.get("https://apihotelesig.herokuapp.com/hoteles/v1/habitaciones");
      
   }
}

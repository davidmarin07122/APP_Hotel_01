  import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from '../servicios/habitaciones.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

public listaHabitaciones:any[]=[]

  constructor( public servicio:HabitacionesService) {

    this.servicio.buscarHvitaciones()
    
    .subscribe(respuesta =>{
      console.log(respuesta);
      
      this.listaHabitaciones = respuesta.datos
    })
   }

  ngOnInit(): void {
  }

}

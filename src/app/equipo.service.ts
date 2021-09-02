import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre:'Juan',
      especialidad:'PHP',
      descripcion:'Estudiante avanzado de lenguaje PHP'
    },
    {
      nombre:'Maria',
      especialidad:'C++',
      descripcion:'Estudiante novato de lenguaje C++'
    },
    {
      nombre:'Carlos',
      especialidad:'Angular',
      descripcion:'Maestro en el uso de Angular'
    }
  ] 

  constructor() {}
  
   obtenerEquipo(){
     return this.equipo;
   }
}

export class Vehiculo {
  id: number;
  name: string;
  linea: string;
  referencia: string;
  modelo: number;
  kilometraje: number;
  color: string;
  imagen: string;

constructor(
  id: number,
  name: string,
  linea: string,
  referencia: string,
  modelo: number,
  kilometraje: number,
  color: string,
  imagen: string){
    this.id = id;
    this.name = name;
    this.linea = linea;
    this.referencia = referencia;
    this.modelo = modelo;
    this.kilometraje = kilometraje;
    this.color = color;
    this.imagen = imagen;


}

}


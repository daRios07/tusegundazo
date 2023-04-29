import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo'
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  totales: Array<string> = [];
   //totales: Map<string, number> = new Map();


  constructor(private vehiculoService:VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.obtenerTotales(vehiculos);
    });
  }

  obtenerTotales(vehiculos:Array<Vehiculo>):void{

    var marcas = [...new Set(vehiculos.map(function(item) {
      return item.marca;
  }, 0))];

  var totales2 = marcas.map(function(item) {
    var totalVeh = vehiculos.filter(function(record) {
        return record.marca === item
    }).reduce(function(tot) {
        return tot +=1;
    }, 0)
    return {
        'marca': item,
        'total': totalVeh
    }
}, 0);



 this.totales = totales2.map(function(item){
  return 'Total '+item.marca +' : '+ item.total;

 });


  }


  ngOnInit() {
    this.getVehiculos();
  }

}

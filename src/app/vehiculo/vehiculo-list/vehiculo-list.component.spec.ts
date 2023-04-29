/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      var vehiculo1 = new Vehiculo(
        faker.datatype.number(),
        faker.lorem.text(),
        faker.lorem.text(),
        faker.lorem.text(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.text(),
        faker.lorem.text(),
        );

        component.vehiculos.push(vehiculo1);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <table-dark> elements', () => {
    expect(debug.queryAll(By.css('.table-dark'))).toHaveSize(1)
  });

  it('should have 3 <filavehiculos> elements', () => {
    expect(debug.queryAll(By.css('.filavehiculos'))).toHaveSize(3)
  });

  it('should have 1 <encabezado> elements', () => {
    expect(debug.queryAll(By.css('.encabezado'))).toHaveSize(1)
  });




});



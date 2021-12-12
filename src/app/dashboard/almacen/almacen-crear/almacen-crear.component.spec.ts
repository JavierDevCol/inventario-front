import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenCrearComponent } from './almacen-crear.component';

describe('AlmacenCrearComponent', () => {
  let component: AlmacenCrearComponent;
  let fixture: ComponentFixture<AlmacenCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

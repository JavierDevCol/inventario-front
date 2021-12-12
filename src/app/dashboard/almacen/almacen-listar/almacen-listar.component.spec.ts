import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenListarComponent } from './almacen-listar.component';

describe('AlmacenListarComponent', () => {
  let component: AlmacenListarComponent;
  let fixture: ComponentFixture<AlmacenListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

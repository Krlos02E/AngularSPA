import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaDetallesComponent } from './matricula-detalles.component';

describe('MatriculaDetallesComponent', () => {
  let component: MatriculaDetallesComponent;
  let fixture: ComponentFixture<MatriculaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatriculaDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatriculaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

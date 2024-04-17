import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNewComponent } from './cursos-new.component';

describe('CursosNewComponent', () => {
  let component: CursosNewComponent;
  let fixture: ComponentFixture<CursosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

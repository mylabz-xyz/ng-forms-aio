import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplesComponent } from './exemples.component';

describe('ExemplesComponent', () => {
  let component: ExemplesComponent;
  let fixture: ComponentFixture<ExemplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

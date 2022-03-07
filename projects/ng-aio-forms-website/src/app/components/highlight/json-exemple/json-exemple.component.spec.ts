import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonExempleComponent } from './json-exemple.component';

describe('JsonExempleComponent', () => {
  let component: JsonExempleComponent;
  let fixture: ComponentFixture<JsonExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

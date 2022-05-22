import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroDropdownComponent } from './zorro-dropdown.component';

describe('ZorroDropdownComponent', () => {
  let component: ZorroDropdownComponent;
  let fixture: ComponentFixture<ZorroDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZorroDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberListComponentComponent } from './number-list-component.component';

describe('NumberListComponentComponent', () => {
  let component: NumberListComponentComponent;
  let fixture: ComponentFixture<NumberListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

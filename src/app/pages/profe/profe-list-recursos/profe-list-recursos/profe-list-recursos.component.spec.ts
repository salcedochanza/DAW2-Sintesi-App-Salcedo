import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeListRecursosComponent } from './profe-list-recursos.component';

describe('ProfeListRecursosComponent', () => {
  let component: ProfeListRecursosComponent;
  let fixture: ComponentFixture<ProfeListRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfeListRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeListRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

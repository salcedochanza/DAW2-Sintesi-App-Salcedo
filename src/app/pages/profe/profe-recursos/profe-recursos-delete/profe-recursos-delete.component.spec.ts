import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeRecursosDeleteComponent } from './profe-recursos-delete.component';

describe('ProfeRecursosDeleteComponent', () => {
  let component: ProfeRecursosDeleteComponent;
  let fixture: ComponentFixture<ProfeRecursosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfeRecursosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeRecursosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

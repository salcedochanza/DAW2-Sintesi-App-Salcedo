import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeRecursosCreateComponent } from './profe-recursos-create.component';

describe('ProfeRecursosCreateComponent', () => {
  let component: ProfeRecursosCreateComponent;
  let fixture: ComponentFixture<ProfeRecursosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfeRecursosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeRecursosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

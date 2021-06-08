import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeRecursosUpdateComponent } from './profe-recursos-update.component';

describe('ProfeRecursosUpdateComponent', () => {
  let component: ProfeRecursosUpdateComponent;
  let fixture: ComponentFixture<ProfeRecursosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfeRecursosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeRecursosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

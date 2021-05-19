import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosUpdateComponent } from './recursos-update.component';

describe('RecursosUpdateComponent', () => {
  let component: RecursosUpdateComponent;
  let fixture: ComponentFixture<RecursosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

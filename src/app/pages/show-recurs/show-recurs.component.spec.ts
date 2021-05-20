import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecursComponent } from './show-recurs.component';

describe('ShowRecursComponent', () => {
  let component: ShowRecursComponent;
  let fixture: ComponentFixture<ShowRecursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRecursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

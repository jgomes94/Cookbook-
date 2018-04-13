import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppListEditComponent } from './shopp-list-edit.component';

describe('ShoppListEditComponent', () => {
  let component: ShoppListEditComponent;
  let fixture: ComponentFixture<ShoppListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

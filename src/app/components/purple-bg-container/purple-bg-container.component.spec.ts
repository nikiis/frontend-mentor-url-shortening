import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleBgContainerComponent } from './purple-bg-container.component';

describe('PurpleBgContainerComponent', () => {
  let component: PurpleBgContainerComponent;
  let fixture: ComponentFixture<PurpleBgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurpleBgContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleBgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

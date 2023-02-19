import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCtaComponent } from './section-cta.component';

describe('SectionCtaComponent', () => {
  let component: SectionCtaComponent;
  let fixture: ComponentFixture<SectionCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBellowComponent } from './header-bellow.component';

describe('HeaderBellowComponent', () => {
  let component: HeaderBellowComponent;
  let fixture: ComponentFixture<HeaderBellowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBellowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

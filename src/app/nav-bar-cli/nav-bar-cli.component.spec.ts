import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCliComponent } from './nav-bar-cli.component';

describe('NavBarCliComponent', () => {
  let component: NavBarCliComponent;
  let fixture: ComponentFixture<NavBarCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

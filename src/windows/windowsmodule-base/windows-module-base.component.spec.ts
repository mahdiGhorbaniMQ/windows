import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsModuleBaseComponent } from './windows-module-base.component';

describe('WindowsModuleBaseComponent', () => {
  let component: WindowsModuleBaseComponent;
  let fixture: ComponentFixture<WindowsModuleBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsModuleBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsModuleBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

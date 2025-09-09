import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlpMenu } from './olp-menu';

describe('OlpMenu', () => {
  let component: OlpMenu;
  let fixture: ComponentFixture<OlpMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlpMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlpMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

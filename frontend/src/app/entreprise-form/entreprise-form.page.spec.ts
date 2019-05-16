import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseFormPage } from './entreprise-form.page';

describe('EntrepriseFormPage', () => {
  let component: EntrepriseFormPage;
  let fixture: ComponentFixture<EntrepriseFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

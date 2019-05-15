import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFormPage } from './candidate-form.page';

describe('CandidateFormPage', () => {
  let component: CandidateFormPage;
  let fixture: ComponentFixture<CandidateFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnAddPagePage } from './post-an-add-page.page';

describe('PostAnAddPagePage', () => {
  let component: PostAnAddPagePage;
  let fixture: ComponentFixture<PostAnAddPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAnAddPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAnAddPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

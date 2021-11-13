import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPagesComponent } from './skills-pages.component';

describe('SkillsPagesComponent', () => {
  let component: SkillsPagesComponent;
  let fixture: ComponentFixture<SkillsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

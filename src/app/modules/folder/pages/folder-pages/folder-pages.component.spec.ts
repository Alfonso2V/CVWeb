import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderPagesComponent } from './folder-pages.component';

describe('FolderPagesComponent', () => {
  let component: FolderPagesComponent;
  let fixture: ComponentFixture<FolderPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

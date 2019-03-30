import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextShowLessComponent } from './text-show-less.component';

describe('TextShowLessComponent', () => {
  let component: TextShowLessComponent;
  let fixture: ComponentFixture<TextShowLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextShowLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextShowLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

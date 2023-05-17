import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScreenComponent } from './test-screen.component';

describe('TestScreenComponent', () => {
  let component: TestScreenComponent;
  let fixture: ComponentFixture<TestScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestScreenComponent]
    });
    fixture = TestBed.createComponent(TestScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

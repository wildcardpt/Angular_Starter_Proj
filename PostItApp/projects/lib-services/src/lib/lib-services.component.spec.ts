import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibServicesComponent } from './lib-services.component';

describe('LibServicesComponent', () => {
  let component: LibServicesComponent;
  let fixture: ComponentFixture<LibServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

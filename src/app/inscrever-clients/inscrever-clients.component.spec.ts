import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreverClientsComponent } from './inscrever-clients.component';

describe('InscreverClientsComponent', () => {
  let component: InscreverClientsComponent;
  let fixture: ComponentFixture<InscreverClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscreverClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscreverClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

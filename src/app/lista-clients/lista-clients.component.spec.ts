import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientsComponent } from './lista-clients.component';

describe('ListaClientsComponent', () => {
  let component: ListaClientsComponent;
  let fixture: ComponentFixture<ListaClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

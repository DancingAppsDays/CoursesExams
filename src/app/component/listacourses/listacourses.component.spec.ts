import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacoursesComponent } from './listacourses.component';

describe('ListacoursesComponent', () => {
  let component: ListacoursesComponent;
  let fixture: ComponentFixture<ListacoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

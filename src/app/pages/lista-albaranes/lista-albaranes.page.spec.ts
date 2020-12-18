import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAlbaranesPage } from './lista-albaranes.page';

describe('ListaAlbaranesPage', () => {
  let component: ListaAlbaranesPage;
  let fixture: ComponentFixture<ListaAlbaranesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlbaranesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAlbaranesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

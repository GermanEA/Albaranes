import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarAlbaranPage } from './mostrar-albaran.page';

describe('MostrarAlbaranPage', () => {
  let component: MostrarAlbaranPage;
  let fixture: ComponentFixture<MostrarAlbaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAlbaranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarAlbaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

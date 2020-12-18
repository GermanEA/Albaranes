import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirmarAlbaranPage } from './firmar-albaran.page';

describe('FirmarAlbaranPage', () => {
  let component: FirmarAlbaranPage;
  let fixture: ComponentFixture<FirmarAlbaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmarAlbaranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirmarAlbaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

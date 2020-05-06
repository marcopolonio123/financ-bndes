import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinancBNDESPage } from './financ-bndes.page';

describe('FinancBNDESPage', () => {
  let component: FinancBNDESPage;
  let fixture: ComponentFixture<FinancBNDESPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancBNDESPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancBNDESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

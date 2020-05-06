import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CredencialPage } from './credencial.page';

describe('CredencialPage', () => {
  let component: CredencialPage;
  let fixture: ComponentFixture<CredencialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredencialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CredencialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCallComponent } from './crypto-call.component';

describe('CryptoCallComponent', () => {
  let component: CryptoCallComponent;
  let fixture: ComponentFixture<CryptoCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

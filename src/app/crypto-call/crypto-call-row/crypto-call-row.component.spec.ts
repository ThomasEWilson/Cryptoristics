import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCallRowComponent } from './crypto-call-row.component';

describe('CryptoCallRowComponent', () => {
  let component: CryptoCallRowComponent;
  let fixture: ComponentFixture<CryptoCallRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoCallRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCallRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

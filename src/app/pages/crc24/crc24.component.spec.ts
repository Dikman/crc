import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Crc24Component } from './crc24.component';

describe('Crc24Component', () => {
  let component: Crc24Component;
  let fixture: ComponentFixture<Crc24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crc24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crc24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

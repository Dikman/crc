import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { Crc32Component } from './crc32.component';

describe('Crc32Component', () => {
  let component: Crc32Component;
  let fixture: ComponentFixture<Crc32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Crc32Component
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crc32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

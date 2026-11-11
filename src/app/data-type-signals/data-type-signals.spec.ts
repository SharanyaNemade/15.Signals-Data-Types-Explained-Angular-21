import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTypeSignals } from './data-type-signals';

describe('DataTypeSignals', () => {
  let component: DataTypeSignals;
  let fixture: ComponentFixture<DataTypeSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTypeSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTypeSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

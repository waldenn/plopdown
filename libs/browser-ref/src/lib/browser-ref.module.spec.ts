import { async, TestBed } from '@angular/core/testing';
import { BrowserRefModule } from './browser-ref.module';

describe('BrowserRefModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserRefModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BrowserRefModule).toBeDefined();
  });
});

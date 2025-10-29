import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComparison } from './product-comparison';

describe('ProductComparison', () => {
  let component: ProductComparison;
  let fixture: ComponentFixture<ProductComparison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComparison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComparison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

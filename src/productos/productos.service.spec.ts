import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './productos.service';

describe('ProductService', () => {
  let service: ProductService; // se declara como let porque al hacerlo como consante da error

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

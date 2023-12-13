import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductService } from './productos.service';
import { Products } from './dto/producto.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Products[] {
    return this.productService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Products {
    return this.productService.findById(id);
  }

  @Post()
  create(@Body() product: Products): Products {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: Products): Products {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Products {
    return this.productService.delete(id);
  }
}

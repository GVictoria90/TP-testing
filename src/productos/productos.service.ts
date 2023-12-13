import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from './dto/producto.dto';

@Injectable()
export class ProductService {
  private products: Products[] = [];

  findAll(): Products[] {
    return this.products;
  }

  findById(id: number): Products {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  create(product: Products): Products {
    // aca va el codigo
    this.products.push(product);
    return product;
  }

  update(id: number, product: Products): Products {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException('Producto no encontrado');
    }
    // Lógica para actualizar un producto
    this.products[index] = { ...this.products[index], ...product };
    return this.products[index];
  }

  delete(id: number): Products {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException('producto no encontrado');
    }
    // Lógica para eliminar un producto
    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    return deletedProduct;
  }
}

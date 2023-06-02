import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductDto } from 'src/dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(product: ProductDto): Promise<ProductDto>;
    getProduct(id: number): Promise<ProductDto>;
    updateProduct(id: number, product: Product): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}

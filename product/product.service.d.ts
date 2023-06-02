import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    createProduct(product: Product): Promise<Product>;
    getProduct(id: number): Promise<Product>;
    updateProduct(id: number, product: Product): Promise<Product>;
    saveProduct(product: Product): Promise<Product>;
    deleteProduct(id: number): Promise<void>;
}

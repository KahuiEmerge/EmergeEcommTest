import { Repository } from 'typeorm';
import { Variant } from './variant.entity';
import { CreateVariantDto } from 'src/dto/create-variant.dto';
import { ProductService } from 'src/product/product.service';
export declare class VariantService {
    private readonly variantRepository;
    private readonly productService;
    constructor(variantRepository: Repository<Variant>, productService: ProductService);
    createVariant(productId: number, createVariantDto: CreateVariantDto): Promise<Variant>;
    getVariant(id: number): Promise<Variant>;
    updateVariant(id: number, variant: Variant): Promise<Variant>;
    deleteVariant(id: number): Promise<void>;
}

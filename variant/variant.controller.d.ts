import { VariantService } from './variant.service';
import { Variant } from './variant.entity';
import { VariantDto } from 'src/dto/variant.dto';
import { CreateVariantDto } from 'src/dto/create-variant.dto';
export declare class VariantController {
    private readonly variantService;
    constructor(variantService: VariantService);
    createVariant(variant: CreateVariantDto, id: number): Promise<VariantDto>;
    getVariant(id: number): Promise<Variant>;
    updateVariant(id: number, variant: Variant): Promise<Variant>;
    deleteVariant(id: number): Promise<void>;
}

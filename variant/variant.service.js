"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const variant_entity_1 = require("./variant.entity");
const product_service_1 = require("../product/product.service");
let VariantService = class VariantService {
    constructor(variantRepository, productService) {
        this.variantRepository = variantRepository;
        this.productService = productService;
    }
    async createVariant(productId, createVariantDto) {
        const attachedProduct = await this.productService.getProduct(productId);
        const createdVariant = this.variantRepository.create({
            size: createVariantDto.size,
            color: createVariantDto.color,
            product: attachedProduct
        });
        return await this.variantRepository.save(createdVariant);
    }
    async getVariant(id) {
        return this.variantRepository.findOne({ where: { id } });
    }
    async updateVariant(id, variant) {
        await this.variantRepository.update(id, variant);
        return this.getVariant(id);
    }
    async deleteVariant(id) {
        await this.variantRepository.delete(id);
    }
};
VariantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(variant_entity_1.Variant)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        product_service_1.ProductService])
], VariantService);
exports.VariantService = VariantService;
//# sourceMappingURL=variant.service.js.map
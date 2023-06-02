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
exports.VariantController = void 0;
const common_1 = require("@nestjs/common");
const variant_service_1 = require("./variant.service");
const variant_entity_1 = require("./variant.entity");
const create_variant_dto_1 = require("../dto/create-variant.dto");
let VariantController = class VariantController {
    constructor(variantService) {
        this.variantService = variantService;
    }
    createVariant(variant, id) {
        return this.variantService.createVariant(id, variant);
    }
    getVariant(id) {
        return this.variantService.getVariant(id);
    }
    updateVariant(id, variant) {
        return this.variantService.updateVariant(id, variant);
    }
    deleteVariant(id) {
        return this.variantService.deleteVariant(id);
    }
};
__decorate([
    (0, common_1.Post)('product/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_variant_dto_1.CreateVariantDto, Number]),
    __metadata("design:returntype", Promise)
], VariantController.prototype, "createVariant", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VariantController.prototype, "getVariant", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, variant_entity_1.Variant]),
    __metadata("design:returntype", Promise)
], VariantController.prototype, "updateVariant", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VariantController.prototype, "deleteVariant", null);
VariantController = __decorate([
    (0, common_1.Controller)('variants'),
    __metadata("design:paramtypes", [variant_service_1.VariantService])
], VariantController);
exports.VariantController = VariantController;
//# sourceMappingURL=variant.controller.js.map
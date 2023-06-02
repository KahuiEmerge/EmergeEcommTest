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
exports.CartItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cart_item_entity_1 = require("./cart-item.entity");
const variant_service_1 = require("../variant/variant.service");
const variant_repository_1 = require("../variant/variant.repository");
let CartItemService = class CartItemService {
    constructor(cartItemRepository, variantRepository, variantService) {
        this.cartItemRepository = cartItemRepository;
        this.variantRepository = variantRepository;
        this.variantService = variantService;
    }
    async createCartItem(createCartItemDto) {
        const { variantId, quantity } = createCartItemDto;
        const variant = await this.variantService.getVariant(variantId);
        let cartItem = await this.cartItemRepository.findOne({ where: { variant: variant } });
        if (cartItem) {
            cartItem.quantity += quantity;
        }
        else {
            cartItem = new cart_item_entity_1.CartItem();
            cartItem.variant = variant;
            cartItem.quantity = quantity;
        }
        return await this.cartItemRepository.save(cartItem);
    }
    async getCartItems() {
        return await this.cartItemRepository.find();
    }
    async getCartItem(id) {
        return await this.cartItemRepository.findOne({ where: { id: id } });
    }
    async updateCartItem(id, updateCartItemDto) {
        const cartItem = await this.cartItemRepository.findOne({ where: { id: id } });
        if (!cartItem) {
            throw new common_1.NotFoundException('Cart item not found');
        }
        const updatedCartItem = Object.assign(cartItem, updateCartItemDto);
        return await this.cartItemRepository.save(updatedCartItem);
    }
    async deleteCartItem(id) {
        const cartItem = await this.cartItemRepository.findOne({ where: { id: id } });
        if (!cartItem) {
            throw new common_1.NotFoundException('Cart item not found');
        }
        await this.cartItemRepository.remove(cartItem);
        return cartItem;
    }
};
CartItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_item_entity_1.CartItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        variant_repository_1.VariantRepository,
        variant_service_1.VariantService])
], CartItemService);
exports.CartItemService = CartItemService;
//# sourceMappingURL=cart-item.service.js.map
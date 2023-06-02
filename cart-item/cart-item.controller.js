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
exports.CartItemController = void 0;
const common_1 = require("@nestjs/common");
const cart_item_service_1 = require("./cart-item.service");
const cart_item_entity_1 = require("./cart-item.entity");
const cart_item_dto_1 = require("../dto/cart-item.dto");
const swagger_1 = require("@nestjs/swagger");
let CartItemController = class CartItemController {
    constructor(cartItemService) {
        this.cartItemService = cartItemService;
    }
    createCartItem(createCartItemDto) {
        return this.cartItemService.createCartItem(createCartItemDto);
    }
    getCartItems() {
        return this.cartItemService.getCartItems();
    }
    getCartItem(id) {
        return this.cartItemService.getCartItem(id);
    }
    updateCartItem(id, updateCartItemDto) {
        return this.cartItemService.updateCartItem(id, updateCartItemDto);
    }
    deleteCartItem(id) {
        return this.cartItemService.deleteCartItem(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, type: cart_item_entity_1.CartItem }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "createCartItem", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, type: [cart_item_entity_1.CartItem] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "getCartItems", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_entity_1.CartItem }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "getCartItem", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_entity_1.CartItem }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cart_item_dto_1.UpdateCartItemDto]),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "updateCartItem", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, type: cart_item_entity_1.CartItem }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "deleteCartItem", null);
CartItemController = __decorate([
    (0, common_1.Controller)('cart-items'),
    (0, swagger_1.ApiTags)('Cart Items'),
    __metadata("design:paramtypes", [cart_item_service_1.CartItemService])
], CartItemController);
exports.CartItemController = CartItemController;
//# sourceMappingURL=cart-item.controller.js.map
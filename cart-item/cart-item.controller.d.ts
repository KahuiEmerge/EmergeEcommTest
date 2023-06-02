import { CartItemService } from './cart-item.service';
import { CartItem } from './cart-item.entity';
import { CreateCartItemDto, UpdateCartItemDto } from 'src/dto/cart-item.dto';
export declare class CartItemController {
    private readonly cartItemService;
    constructor(cartItemService: CartItemService);
    createCartItem(createCartItemDto: CreateCartItemDto): Promise<CartItem>;
    getCartItems(): Promise<CartItem[]>;
    getCartItem(id: number): Promise<CartItem>;
    updateCartItem(id: number, updateCartItemDto: UpdateCartItemDto): Promise<CartItem>;
    deleteCartItem(id: number): Promise<CartItem>;
}

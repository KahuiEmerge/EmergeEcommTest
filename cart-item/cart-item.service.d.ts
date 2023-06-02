import { Repository } from 'typeorm';
import { CartItem } from './cart-item.entity';
import { CreateCartItemDto, UpdateCartItemDto } from 'src/dto/cart-item.dto';
import { VariantService } from '../variant/variant.service';
import { VariantRepository } from '../variant/variant.repository';
export declare class CartItemService {
    private readonly cartItemRepository;
    private readonly variantRepository;
    private readonly variantService;
    constructor(cartItemRepository: Repository<CartItem>, variantRepository: VariantRepository, variantService: VariantService);
    createCartItem(createCartItemDto: CreateCartItemDto): Promise<CartItem>;
    getCartItems(): Promise<CartItem[]>;
    getCartItem(id: number): Promise<CartItem>;
    updateCartItem(id: number, updateCartItemDto: UpdateCartItemDto): Promise<CartItem>;
    deleteCartItem(id: number): Promise<CartItem>;
}

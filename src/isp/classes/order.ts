import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Cart is empty');
      return;
    }
    this._orderStatus = 'Closed';
    this.messaging.sendMessage(
      `Your order has been placed. Total: ${this.cart.totalWithDiscount()}`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}

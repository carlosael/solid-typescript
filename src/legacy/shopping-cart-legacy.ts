type CartItem = { name: string; price: number };
type OrderStatus = 'Open' | 'Closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Cart is empty');
      return;
    }
    this._orderStatus = 'Closed';
    this.sendMessage(`Your order has been placed. Total: ${this.total()}`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('Message sent:', message);
  }

  saveOrder(): void {
    console.log('Order saved');
  }

  clear(): void {
    console.log('Cart cleared');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Shirt', price: 100.98 });
shoppingCart.addItem({ name: 'Book', price: 20.52 });
shoppingCart.addItem({ name: 'Pen', price: 8.44 });
//shoppingCart.clear();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);

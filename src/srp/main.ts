import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem(new Product('Shirt', 100.98));
shoppingCart.addItem(new Product('Book', 20.52));
shoppingCart.addItem(new Product('Pen', 8.44));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);

order.checkout();
console.log(order.orderStatus);

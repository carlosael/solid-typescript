import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('João', 'Correia', '123456789');
const order = new Order(shoppingCart, messaging, persistency, customer);
shoppingCart.addItem(new Product('Shirt', 100.98));
shoppingCart.addItem(new Product('Book', 20.52));
shoppingCart.addItem(new Product('Pen', 8.44));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

console.log(order.orderStatus);

order.checkout();
console.log(order.orderStatus);

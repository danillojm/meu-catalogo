import { Product } from '../product/product.model';
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';



@Injectable()
export class ShoppingCartService {

  items: CartItem[] = [];
  cartItemsLocalStorage = JSON.parse(localStorage.getItem("cartItems"));

  constructor() {

  }

  addItem(item: Product) {

    if (this.cartItemsLocalStorage != null) {
      this.items = this.cartItemsLocalStorage;
    }

    let foundItem = this.items.find((mItem) => mItem.product.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    localStorage.setItem("cartItems", JSON.stringify(this.items));
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1
  }

  getItems(): CartItem[] {

    if (this.cartItemsLocalStorage != null) {
      return this.cartItemsLocalStorage;
    }

    return [];
  }
  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
    localStorage.setItem("cartItems", JSON.stringify(this.items));
  }

  clear() {
    this.items = [];
    localStorage.setItem("cartItems", JSON.stringify([]));

  }

  total(): number {

    return this.items
      .map(item => item.product.price * item.quantity)
      .reduce((prev, value) => prev + value, 0);
  }
}



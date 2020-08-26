import { ChangeDetectorRef, Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from '../shopping-cart/cart-item.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

export interface Client {

  name: string;
  email: string;
  telephone: string;
  msg: string;
}


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  client: Client = {
    name: '',
    email: '',
    telephone: '',
    msg: ''
  }


  displayedColumns: string[] = ['product', 'quantity', 'unitaryValue', 'valueTotal'];
  dataSource: any
  constructor(private shoppingCartService: ShoppingCartService, private router: Router,@Inject(DOCUMENT) private document: any) {


  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<CartItem>(this.shoppingCartService.getItems());
  }

  deleteItem(item: any): void {
    console.log(item);
    this.shoppingCartService.removeItem(item);
    this.dataSource = new MatTableDataSource<CartItem>(this.shoppingCartService.getItems());
  }

  clearDataSouece() {

    this.shoppingCartService.clear();
    this.dataSource = new MatTableDataSource<CartItem>([]);
    console.log(this.dataSource);
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  nextPage() {

    this.router.navigate(['/resume'])

  }

  disabledButtonClick(): boolean {

    if (this.shoppingCartService.getItems().length === 0) {
      return true;
    }
    return false;

  }

  finalize(){
    console.log(this.client)

    const url = 'https://api.whatsapp.com/send?phone=5581997207112&text=Nome:'+this.client.name+' Email: '+this.client.email;

    window.open(url , '_blank');


  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CartItem } from 'src/app/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }
  displayedColumns: string[] = ['product', 'quantity', 'unitaryValue', 'valueTotal'];
  dataSource: any

  ngOnInit(): void {

    this.dataSource = this.shoppingCartService.items;

  }
  total(): number {
    return this.shoppingCartService.total();
  }
  deleteItem(item: any): void {
    console.log(item);
    this.shoppingCartService.removeItem(item);
    this.dataSource = new MatTableDataSource<CartItem>(this.shoppingCartService.getItems());
  }

}

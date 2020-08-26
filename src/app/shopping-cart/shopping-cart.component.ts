import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';





export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 189, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 289, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 389, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  lengthShoppingCart: number;

  constructor(private shoppinCartService: ShoppingCartService) { }

  ngOnInit() {

    this.lengthShoppingCart = this.shoppinCartService.getItems().length;
  }


}

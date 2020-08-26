import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private activeRouter: ActivatedRoute) { }

  @Input()
  product: Product;

  @Output() addProduct = new EventEmitter();

  ngOnInit(): void {
  }


  emitEvent() {
    this.addProduct.emit(this.product);
  }


}

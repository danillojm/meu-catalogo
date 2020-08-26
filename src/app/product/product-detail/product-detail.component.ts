import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    center: true,
    autoWidth: true,
    autoHeight: true,
    margin: 0,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  product: Product;
  constructor(private shoppinCartService: ShoppingCartService, private productService: ProductService, private activateRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.productService.getProductsById(id).subscribe(product => {
      this.product = product;
    });


  }

  addProductCart() {
    this.shoppinCartService.addItem(this.product);
    this.route.navigateByUrl("checkout");
  }


}

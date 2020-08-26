import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { Category } from './../product/category/category.model';
import { CategoryService } from './../product/category/category.service';
import { ProductService } from './../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products: Product[] = [];
  productsBase: Product[] = [];
  categories: Category[] = [];
  category: Category;
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(products => {
      this.productsBase = products;
      this.products = this.productsBase;

    });

    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });


  }

  getProductByCategory(category: any) {
    let productsByCategory: Product[] = [];
    this.category = category;
    this.productsBase.forEach(element => {
      if (element.category.name === category.name) {
        productsByCategory.push(element);
      }
    });

    this.products = productsByCategory;
  }

}

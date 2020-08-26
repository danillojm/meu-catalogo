import { Category } from './category.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  category: Category;


  @Output() getProductByCategory = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.getProductByCategory.emit(this.category);
  }

}

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CategoryService } from '../product/category/category.service';
import { Category } from '../product/category/category.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  categories: Category[] = [];
  constructor(private breakpointObserver: BreakpointObserver, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });
  }


}

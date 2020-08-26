import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    console.log(this.http.get<Category[]>(this.baseUrl))

    return this.http.get<Category[]>(this.baseUrl);
  }
}

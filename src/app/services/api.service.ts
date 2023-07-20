import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BookModel } from '../models/book.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getBooksList(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>('../../assets/list.json');
  }

 
}

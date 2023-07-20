import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject } from 'rxjs';
import { BookModel } from '../models/book.model';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private apiService: ApiService) { }

  list$: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  list: any;

  getBooksList() {
    this.apiService.getBooksList().subscribe(list => {
      this.list = list;
      this.list$.next(list);
    })
  }

  getBookByIsbn(isbn: string) {
    return this.list.find((book: BookModel) => book.isbn === isbn);
  }

  getBooksByName(searchText: string) {
    let filterResult = this.list.filter((book: BookModel) => book.title.toLowerCase().includes(searchText.toLowerCase()));
    this.list$.next(filterResult);
  }

  deleteBook(isbn: string) {
    this.list = this.list.filter((book: BookModel) => book.isbn !== isbn);
    this.list$.next(this.list);
  }

  updateBook(bookToUpdate: BookModel): void {
    this.list = this.list.map((book: BookModel) => {
      if (bookToUpdate.isbn === book.isbn) {
        book = new BookModel(bookToUpdate);
      }
      return book;
    });
    this.list$.next(this.list);
  }

  addBook(newBook: BookModel): void {
    newBook.isbn = this.generateRandomNumber();
    this.list.unshift(newBook);
  }

  generateRandomNumber() {
    return `${Math.floor(Math.random() * (9999999 - 1) + 1)}`;
  };
}

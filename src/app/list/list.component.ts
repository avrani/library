import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { BookModel } from '../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: [];
  subscription: Subscription;
  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.storageService.list$.subscribe(list => {
      if (!list) {
        this.storageService.getBooksList();
      } else {
        this.list = list;
      }
    })
    this.onSearch('');
  }

  onSearch(searchText: string) {
    this.storageService.getBooksByName(searchText);
  }

  onDelete(isbn: string) {
    this.storageService.deleteBook(isbn);
  }

  onEdit(isbn: string) {
    this.storageService.deleteBook(isbn);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}

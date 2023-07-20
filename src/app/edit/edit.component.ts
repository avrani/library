import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../models/book.model';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  book: BookModel;

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {
    const isbn = this.activatedRoute.snapshot.paramMap.get('isbn');
    this.book = this.storageService.getBookByIsbn(isbn);
  }

  onUpdate(book: BookModel) {
    this.storageService.updateBook(book);
    this.router.navigateByUrl('list')
  }

}

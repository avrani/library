import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../models/book.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  book: BookModel;

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {
    const isbn = this.activatedRoute.snapshot.paramMap.get('isbn');
    this.book = new BookModel(null);
  }

  onAdd(book: BookModel) {
    this.storageService.addBook(book);
    this.router.navigateByUrl('list')

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../models/book.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  book: BookModel;

  constructor(private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.book = this.storageService.getBookByIsbn(isbn);
  }

}

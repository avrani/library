import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../models/book.model';
@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.scss']
})
export class AddEditFormComponent implements OnInit {

  form: FormGroup;
  @Output() onUpdateEvent = new EventEmitter;
  @Input() book: BookModel;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      author: [this.book.author, [Validators.required, Validators.minLength(2)]],
      category: [this.book.category, [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$")]],
      longDescription: [this.book.longDescription, [Validators.required, Validators.minLength(2)]],
      shortDescription: [this.book.shortDescription, [Validators.required, Validators.minLength(2)]],
      title: [this.book.title, [Validators.required, Validators.minLength(2)]]
    });
  }

  update() {
    this.onUpdateEvent.emit({ ...this.form.value, isbn: this.book.isbn,thumbnailUrl:this.book.thumbnailUrl })
  }

  get author() {
    return this.form.get('author');
  }

  get category() {
    return this.form.get('category');
  }

  get longDescription() {
    return this.form.get('longDescription');
  }

  get publishedDate() {
    return this.form.get('publishedDate');
  }

  get shortDescription() {
    return this.form.get('shortDescription');
  }

  get title() {
    return this.form.get("title");
  }



}

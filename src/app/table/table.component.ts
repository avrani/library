import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() list;
  @Output() onDeleteEvent = new EventEmitter;

  constructor() { }

  delete(isbn: string): void {
    this.onDeleteEvent.emit(isbn);
  }
}

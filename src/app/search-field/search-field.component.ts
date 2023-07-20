import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  @Output() onSearchEvent = new EventEmitter;
  @ViewChild('searchRef', { static: false }) searchRef: ElementRef;
  searchText: string;
  subscription: Subscription;

  ngAfterViewInit() {
    this.subscription = fromEvent(this.searchRef.nativeElement, 'keyup').pipe(
      debounceTime(100),
    ).subscribe((event: any) => {
      this.onSearchEvent.emit(event.target.value);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}

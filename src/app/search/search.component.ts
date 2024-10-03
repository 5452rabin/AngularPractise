import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchterm:string='';
@Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();

onSearchTermChange(): void {
  this.searchChanged.emit(this.searchterm);
}

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() sortByEvent = new EventEmitter<string>()
  @Output() searchEvent = new EventEmitter<string>()

  
  // users: User[] = [];
  // sortedUsers: User[] = []
  panelOpenState = false;
  searchText = new FormControl("");
  age = new FormControl("");
  gender = new FormControl("");

  constructor() { }

  ngOnInit(): void {
  }

  sortUsers(sortBy: string) {
      this.sortByEvent.emit(sortBy)
  }

  searchUsers(searchString: string){
    this.searchEvent.emit(searchString)
  }

}

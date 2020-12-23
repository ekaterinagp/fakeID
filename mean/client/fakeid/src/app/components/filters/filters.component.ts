import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  users: User[] = []

  searchText = new FormControl("");
  age = new FormControl("");
  gender = new FormControl("");

  sortArrows = {
    sortByName: false,
    sortByAge: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  sortUsers(sortBy: string) {
    // this.changeArrows(sortBy);

    if (sortBy == "sortByName") {
      this.sortArrows.sortByAge = false;
      this.sortUsersByName();
    }
 
    if (sortBy == "sortByIsAge") {
      // this.activeSort.sortByIsChild = true;
      this.sortArrows.sortByName = false;
      this.sortUsersByAge();
    }
  }
  sortUsersByName() {}
  sortUsersByAge() {}
}

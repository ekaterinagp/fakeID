import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";
import { Subscription } from 'rxjs';

import { User } from '../../models/user.model';
import { OverviewService } from '../../services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  users: User[] = [];
  sortedUsers: User[] = []
  usersSub: Subscription = new Subscription();
  searchSub = new Subscription;
  searchText = new FormControl("");

  sorters = {
    sortByName: false,
    sortByAge: false,
  };

  constructor(private overviewService: OverviewService) {}

  ngOnInit(): void {
    this.usersSub = this.overviewService.getUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user) => {
        user.isChild = user.age < 18 ? true : false;
        user.isEmployee = user.CVR ? true : false;
      });
      this.sortedUsers = this.users;
      console.log(data);
    });

    this.searchSub = this.searchText.valueChanges
    .pipe(debounceTime(300))
    .subscribe((res: string) => {
      console.log(res)
      this.users.filter((user) =>
          user.name.toLowerCase().includes(res.toLowerCase())
      );
      console.log(this.sortedUsers)

      // if (this.filtered) {
        // } else {
          //   this.sortedUsers = this.users.filter((user) =>
          //     user.commonName.toLowerCase().includes(res.toLowerCase())
      //   );
      //   console.log(this.sortedUsers);
      // }
    });
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
    this.searchSub.unsubscribe
  }

  changeSorters(sortBy: string):void {
    if(sortBy === 'sortByAge'){
      this.sorters.sortByAge = !this.sorters.sortByAge
      this.sorters.sortByName = false
    }
    if(sortBy === 'sortByName'){
      this.sorters.sortByName = !this.sorters.sortByName
      this.sorters.sortByAge = false
    }    
  }

  handleSort(sortBy:string) :void{
    this.changeSorters(sortBy);
    if(this.sorters.sortByAge){
      this.sortUsersByAge()
    }
    if(this.sorters.sortByName){
      this.sortUsersByName()
    }
  }
  
  sortUsersByName() {
      this.sortedUsers.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }  
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
  
        return 0;
      });
    }
 

    sortUsersByAge() {
    this.sortedUsers.sort((a,b) => {
      return a.age - b.age;
    })
  }

}

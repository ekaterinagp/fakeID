import { Component, OnInit } from '@angular/core';
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
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }

  changeArrows(sortBy: string):void {
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
    this.changeArrows(sortBy);
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

  handleSearch(searchString: string){
    console.log('string')
  }
}

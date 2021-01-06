import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { OverviewService } from '../../services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  public testPageUrl = environment.testPageUrl;

  users: User[] = [];
  sortedUsers: User[] = [];
  usersSub: Subscription = new Subscription();
  searchSub = new Subscription();
  searchText = new FormControl('');
  panelOpenState = false;
  sorters = {
    sortByName: false,
    sortByAge: false,
  };
  isChild = new FormControl('');
  gender = new FormControl('');
  isCompany = new FormControl('');
  filtersApplied = {
    isChild: false,
    isAdult: false,
    isFemale: false,
    isMale: false,
    isCompany: false,
    isNotCompany: false,
  };
  filtered: User[] = [];

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
        console.log(res);
        this.sortedUsers = this.users.filter((user) =>
          user.name.toLowerCase().includes(res.toLowerCase())
        );

        console.log(this.sortedUsers);
      });
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
    this.searchSub.unsubscribe;
  }

  changeSorters(sortBy: string): void {
    if (sortBy == 'sortByAge') {
      this.sorters.sortByAge = !this.sorters.sortByAge;
      this.sorters.sortByName = false;
    }
    if (sortBy == 'sortByName') {
      this.sorters.sortByName = !this.sorters.sortByName;
      this.sorters.sortByAge = false;
    }
  }

  sortUsers(sortBy: string): void {
    this.changeSorters(sortBy);
    if (this.sorters.sortByAge) {
      this.sortUsersByAge();
    }
    if (this.sorters.sortByName) {
      this.sortUsersByName();
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
    this.sortedUsers.sort((a, b) => {
      return a.age - b.age;
    });
  }

  showChildren() {
    this.filtersApplied.isChild = true;
    this.filtersApplied.isAdult = false;

    this.applySelectedFilters();
  }

  showAdults() {
    this.filtersApplied.isAdult = true;
    this.filtersApplied.isChild = false;
    this.applySelectedFilters();
  }
  showCompany() {
    this.filtersApplied.isCompany = true;
    this.filtersApplied.isNotCompany = false;

    this.applySelectedFilters();
  }

  showNotCompany() {
    this.filtersApplied.isNotCompany = true;
    this.filtersApplied.isCompany = false;
    this.applySelectedFilters();
  }

  isFemale(user: User) {
    return user.gender == 'female';
  }

  isMale(user: User) {
    return user.gender == 'male';
  }

  showFemale() {
    this.filtersApplied.isFemale = true;
    this.filtersApplied.isMale = false;
    this.applySelectedFilters();
  }

  showMale() {
    this.filtersApplied.isMale = true;
    this.filtersApplied.isFemale = false;
    this.applySelectedFilters();
  }

  showAll(filterType: string) {
    if (filterType == 'gender') {
      this.filtersApplied.isFemale = false;
      this.filtersApplied.isMale = false;
    }

    if (filterType == 'company') {
      this.filtersApplied.isCompany = false;
      this.filtersApplied.isNotCompany = false;
    }

    if (filterType == 'child') {
      this.filtersApplied.isChild = false;
      this.filtersApplied.isAdult = false;
    }

    this.applySelectedFilters();
  }

  resetFilters() {
    this.sortedUsers = this.users;
    this.isChild.setValue('all');
    this.isCompany.setValue('all');
    this.gender.setValue('all');
    this.filtersApplied = {
      isChild: false,
      isAdult: false,
      isFemale: false,
      isMale: false,
      isCompany: false,
      isNotCompany: false,
    };
  }
  applySelectedFilters() {
    console.log(this.filtersApplied);
    this.sortedUsers = this.users;

    if (this.filtersApplied.isNotCompany) {
      this.filtered = this.sortedUsers.filter((user) => !user.CVR);
      this.sortedUsers = this.filtered;
    }

    if (this.filtersApplied.isAdult) {
      this.filtered = this.sortedUsers.filter((user) => !user.isChild);
      this.sortedUsers = this.filtered;
    }

    if (this.filtersApplied.isChild) {
      this.filtered = this.sortedUsers.filter((user) => user.isChild);

      this.sortedUsers = this.filtered;
    }

    if (this.filtersApplied.isMale) {
      this.filtered = this.sortedUsers.filter(this.isMale);
      this.sortedUsers = this.filtered;
    }

    if (this.filtersApplied.isFemale) {
      this.filtered = this.sortedUsers.filter(this.isFemale);

      this.sortedUsers = this.filtered;
    }

    if (this.filtersApplied.isCompany) {
      this.filtered = this.sortedUsers.filter((user) => user.CVR);
      this.sortedUsers = this.filtered;
    }
  }
}

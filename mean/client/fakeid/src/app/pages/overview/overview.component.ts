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
  usersSub: Subscription = new Subscription();

  constructor(private overviewService: OverviewService) {}

  ngOnInit(): void {
    this.usersSub = this.overviewService.getUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user) => {
        user.isChild = user.age < 18 ? true : false;
        user.isEmployee = user.CVR ? true : false;
      });
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }
}

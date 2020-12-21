import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { OverviewService } from '../services/overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  users: User[] = [];

  constructor( private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.overviewService.getUsers()
    .subscribe((users: any) => {this.users = users }) 
  }

}

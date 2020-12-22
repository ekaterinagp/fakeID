import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from '../../models/user.model';
import { EditUserService } from '../../services/edit-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  user!: User;
  editForm: FormGroup;
  showEditContent: Boolean = true;
  spouses: User[] = [];
  children: User[] = [];
  subs = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private editUserService: EditUserService,
    private location: Location
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      formattedDate: ['', Validators.required],
      maritialStatus: [],
      spouse: [''],
    });
  }

  ngOnInit(): void {
    this.subs.add(
      this.route.params.subscribe(() => {
        this.getUser();
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

  getUser(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.editUserService
        .getUser(id)
        .subscribe(({ singleUser }) => (this.user = singleUser));
    }
  }

  ShowHideEdit() {
    console.log('click');
    this.showEditContent = this.showEditContent ? false : true;
  }
}

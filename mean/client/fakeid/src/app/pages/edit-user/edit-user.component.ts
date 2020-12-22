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
import { first } from 'rxjs/operators';

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
  maritalStatuses = [
    'Married',
    'Single',
    'Divorced',
    'Widow',
    'Registered Partnership',
    'Abolition of Registered Partnership',
    'Deceased',
    'Unknown',
  ];
  spouseToAdd: any;

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
      children: [''],
    });
  }

  ngOnInit(): void {
    this.subs.add(
      this.route.params.subscribe(() => {
        this.getUser();
        this.getSpouses();
        this.getChildren();
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
      this.editUserService.getUser(id).subscribe(({ singleUser }) => {
        this.user = singleUser;
        if (this.user.age > 17) {
          this.user.isChild = false;
        } else {
          this.user.isChild = true;
        }

        this.editForm.patchValue({
          name: this.user.name,
          dateOfBirth: this.user.formattedDate,
          address: this.user.address,
          maritialStatus: this.user.maritialStatus,
        });
        console.log(this.user);
        console.log(this.editForm);
      });
    }
  }

  ShowHideEdit() {
    console.log('click');
    this.showEditContent = this.showEditContent ? false : true;
  }

  getSpouses(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editUserService
        .getSpouses(id)
        .pipe(first())
        .subscribe((data: any[]) => {
          console.log(data);
          this.spouses = data;
          console.log(this.spouses);
        });
    }
  }

  getChildren(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editUserService
        .getChildren(id)
        .pipe(first())
        .subscribe((data: any[]) => {
          console.log(data);
          this.children = data;
          console.log(this.children);
        });
    }
  }

  // getSelectedOptionText(event: any) {
  //   console.log(event);
  //   let selectElementText =
  //     event.target['mat-options'][event.target['mat-options'].selectedIndex]
  //       .text;
  //   console.log(selectElementText);
  // }

  getSpouseToAdd(id: string) {
    this.spouses.forEach((one) => {
      if (id == one._id) {
        return one;
      } else {
        return null;
      }
    });
  }

  onSubmit() {
    console.log(this.editForm.value);
    if (this.editForm.value.spouse._id) {
      this.spouseToAdd = this.getSpouseToAdd(this.editForm.value.spouse._id);
    }
    this.editUserService
      .updateUser({
        name: this.editForm.value.name,
        _id: this.user._id,
        address: this.editForm.value.address,
        maritalStatus: this.editForm.value.maritialStatus,
        spouse: this.spouseToAdd,
      } as User)
      .subscribe((_) => console.log('updated'));
  }
}

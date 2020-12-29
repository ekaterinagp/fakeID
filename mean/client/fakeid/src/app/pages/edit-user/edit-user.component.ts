import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotificationComponent } from '../../components/notification/notification.component';
import { DialogTextUser, User } from '../../models/user.model';
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
  data = 'User updated';
  maritalStatuses = [
    { statusId: '2', status: 'Married' },
    { statusId: '8', status: 'Unknown' },
    { statusId: '1', status: 'Single' },
    { statusId: '3', status: 'Divorced' },
    { statusId: '4', status: 'Widow' },
    { statusId: '5', status: 'Registered Partnership' },
    { statusId: '6', status: 'Abolition of Registered Partnership' },
    { statusId: '7', status: 'Deceased' },
  ];
  spouseToAdd: any;
  childToAdd: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private editUserService: EditUserService,
    private location: Location,
    public dialog: MatDialog
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      formattedDate: ['', Validators.required],
      maritalStatusId: '',
      spouseId: [''],
      childId: [''],
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
          maritalStatusId: this.user.maritalStatusId,
        });
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
      this.editUserService.getSpouses(id).subscribe((data: any[]) => {
        console.log(data);
        this.spouses = data;
        console.log(this.spouses);
      });
    }
  }

  getChildren(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editUserService.getChildren(id).subscribe((data: any[]) => {
        console.log(data);
        this.children = data;
        console.log(this.children);
      });
    }
  }

  getSpouseToAdd(id: string) {
    console.log(this.spouses);
    return (this.spouseToAdd = this.spouses.find((spouse) => id == spouse._id));
  }

  getChildToAdd(id: string) {
    console.log(this.children);
    return (this.childToAdd = this.children.find((child) => id == child._id));
  }

  onSubmit() {
    console.log(this.editForm.value);
    // if (this.editForm.value.spouseId) {
    //   this.spouseToAdd = this.getSpouseToAdd(this.editForm.value.spouseId);
    // }
    // if(this.editForm.value.child){
    //   this.childToAdd=this.getChildToAdd(this.editForm.value.child)
    // }
    console.log(this.editForm.value);
    console.log(this.spouseToAdd);

    this.editUserService
      .updateUser({
        name: this.editForm.value.name,
        _id: this.user._id,
        address: this.editForm.value.address,
        maritalStatusId: this.editForm.value.maritalStatusId,
        spouseId: this.editForm.value.spouseId,
        childId: this.editForm.value.childId,
      } as User)
      .subscribe((_) => {
        console.log('updated');
        this.openDialog();
      });
  }

  openDialog() {
    this.dialog.open(NotificationComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        text: DialogTextUser.update,
      },
    });
  }
}

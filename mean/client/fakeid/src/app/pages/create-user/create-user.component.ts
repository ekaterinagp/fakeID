// import { DatePipe, formatCurrency } from '@angular/common';
import { formatDate, Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NotificationComponent } from 'src/app/components/notification/notification.component';
import { DialogTextUser, User } from '../../models/user.model';
import { CreateUserService } from '../../services/create-user.service';

moment.locale('da');

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'da-DK' }],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  users: User[] = [];
  localeString: string = 'da';
  genders = ['Female', 'Male'];
  addresses = ['Lygten 17, 2400 Norrebro', 'Lygten 37, 2400 Norrebro'];
  dateToAdd: any;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private createUserService: CreateUserService
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      isEmployee: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onSubmit() {
    let date = this.createForm.get('dateOfBirth');
    if (date) {
      const formattedDate = formatDate(date.value, 'ddMMyy', 'en-GB');
      this.createUserService
        .addUser({
          name: this.createForm.value.name,
          dateOfBirth: formattedDate,
          address: this.createForm.value.address,
          genderIdentification:
            this.createForm.value.gender == 'Female' ? '0002' : '0001',
          isEmployee: this.createForm.value.isEmployee,
        } as User)
        .subscribe((_) => {
          console.log('updated');
          this.createForm.reset();
          this.openDialog();
        });
    }
  }

  openDialog() {
    this.dialog.open(NotificationComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        text: DialogTextUser.create,
      },
    });
  }
}

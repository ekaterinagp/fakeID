import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from '../../models/user.model';
import { Observable, Subscription } from 'rxjs';
import { DatePipe, formatCurrency } from '@angular/common';
import { Location } from '@angular/common';

import {
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
moment.locale('da');

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  createForm: FormGroup;
  users: User[] = [];
  localeString: string = 'da';
  genders = ['Female', 'Male'];
  addresses = ['Lygten 17, 2400 Norrebro', 'Lygten 37, 2400 Norrebro'];

  constructor(
    public datepipe: DatePipe,
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    moment.locale(this.localeString);
  }
  ngOnDestroy(): void {}

  goBack(): void {
    this.location.back();
  }

  onSubmit() {}
}

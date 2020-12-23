import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import * as moment from 'moment';

moment.updateLocale('da', {
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD-MM-YYYY',
    l: 'DD-MM-YYYY',
    LL: 'D-MMMM-YYYY',
    LLL: 'D-MMMM-YYYY HH:mm',
    LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
  },
});
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    AppComponent,
    OverviewComponent,
    MenuComponent,
    CreateUserComponent,
    EditUserComponent,
  ],
  providers: [
    DatePipe,
    [
      { provide: MAT_DATE_LOCALE, useValue: 'da-DK' },
      { provide: LOCALE_ID, useValue: 'da-DK' },
    ],
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

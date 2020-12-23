import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notificationContainer',
  templateUrl: './notificationContainer.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationContainerComponent {
  text: string = '';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(NotificationComponent, {
      panelClass: 'custom-dialog-container',
    });
  }
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NotificationComponent>) {}
  close() {
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}

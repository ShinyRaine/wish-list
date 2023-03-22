import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishFormComponent } from './wish-form/wish-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wish-list';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(WishFormComponent);
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WishFormComponent } from './wish-form/wish-form.component';
import { WishDetailComponent } from './wish-detail/wish-detail.component';
import { WishService } from './wish.service';
import { Wish } from './wish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wish-list';
  constructor(
    private wishService: WishService,
    public dialog: MatDialog
  ) {}
  list: Wish[] = []
  openDialog() {
    const formDialog = this.dialog.open(WishFormComponent);
    formDialog.afterClosed().subscribe(result => {
      if(result === 'submit') {
        this.getList()
      }
    });
  }
  openDetail(wish: Wish) {
    const detailDialog = this.dialog.open(WishDetailComponent, {
      data: wish
    });
  }
  getList() {
    this.wishService.getList().subscribe(list => this.list = list)
  }
  ngOnInit() {
    this.getList()
  }
}

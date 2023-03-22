import { Component, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Wish } from '../wish';
import { WishService } from '../wish.service';
@Component({
  selector: 'app-wish-detail',
  templateUrl: './wish-detail.component.html',
  styleUrls: ['./wish-detail.component.scss']
})
export class WishDetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Wish,
    private wishService: WishService
  ) {}
  handleChange() {
    this.wishService.updateWish(this.data)
  }
}

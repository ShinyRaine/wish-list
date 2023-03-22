import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, EventEmitter, Output } from '@angular/core';
import { Wish, Step } from '../wish';
import { MatChipInputEvent } from '@angular/material/chips';
import { WishService } from '../wish.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.scss']
})
export class WishFormComponent {
  constructor(
    public dialogRef: MatDialogRef<WishFormComponent>,
    private wishService: WishService
  ) {}
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  model: Wish = {
    id: 0,
    name: '',
    steps: []
  };

  onSubmit() { 
    this.wishService.addWish(this.model)
    this.dialogRef.close('submit')
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.model.steps.push({name: value, achieved: false});
    }

    event.chipInput!.clear();
  }

  remove(step: Step): void {
    const index = this.model.steps.indexOf(step);

    if (index >= 0) {
      this.model.steps.splice(index, 1);
    }
  }


}

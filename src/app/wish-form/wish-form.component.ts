import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { Wish, Step } from '../wish';
import { MatChipInputEvent } from '@angular/material/chips';
import { WishServiceService } from '../wish-service.service';

@Component({
  selector: 'app-wish-form',
  templateUrl: './wish-form.component.html',
  styleUrls: ['./wish-form.component.scss']
})
export class WishFormComponent {
  constructor(private wishService: WishServiceService) {}
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  model: Wish = {
    id: 0,
    name: '',
    steps: []
  };

  // submitted = false;

  onSubmit() { 
    this.wishService.addWish(this.model)
    
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

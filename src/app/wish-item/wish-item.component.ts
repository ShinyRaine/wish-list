import { Component, Input } from '@angular/core';
import { Wish } from '../wish';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss']
})
export class WishItemComponent {
  @Input() data: Wish = {name: '', id: 0, steps: []}

  get progress() {
    return this.data.steps.filter(item => item.achieved).length / this.data.steps.length * 100
  }
}

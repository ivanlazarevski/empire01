import { Component, Input } from '@angular/core';
import { Ability } from 'src/app/helpers/ability.type';

@Component({
  selector: 'empire-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss'],
})
export class AbilityComponent {
  @Input() ability: Ability;
}

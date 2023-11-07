import { Component, Input } from '@angular/core';
import { Weapon } from 'src/app/helpers/weapon.type';

@Component({
  selector: 'empire-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent {
  @Input() weapon: Weapon;
}

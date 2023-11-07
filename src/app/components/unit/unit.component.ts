import { Component, Input } from '@angular/core';
import { Unit } from 'src/app/helpers/unit.type';

@Component({
  selector: 'empire-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss'],
})
export class UnitComponent {
  @Input() unit: Unit;
}

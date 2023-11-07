import { Component } from '@angular/core';
import { Unit } from 'src/app/helpers/unit.type';

@Component({
  selector: 'app-unit-library',
  templateUrl: './unit-library.component.html',
  styleUrls: ['./unit-library.component.scss'],
})
export class UnitLibraryComponent {
  public units: Unit[] = [
    {
      name: 'Rifle Guard',
      image: '/assets/images/female-cadian-astra-militarum.webp',
      stats: {
        movement: 6,
        cost: 10,
        weight: 6,
        toughness: 2,
        count: 4,
      },
      weapons: [
        {
          name: 'Bolt Rifle',
          range: 10,
          shots: 1,
          combatStrength: 7,
          armorPiercing: false,
        },
        {
          name: 'Chainsword',
          range: 'M',
          shots: 2,
          combatStrength: 6,
          armorPiercing: false,
        },
      ],
      abilities: [
        {
          name: 'Finest Hour',
          charges: 1,
          range: 'self',
          description: `Until the beginning of your next turn, this unit may fire their Bolt
          Rifle twice as many times and their Bolt Rifle combat value is 6.
          Can only be activated when there are 2 or less miniatures remaining.`,
        },
      ],
    },
    {
      name: 'Medtech',
      image: '/assets/images/medtech.png',
      stats: {
        movement: 6,
        cost: 10,
        weight: 4,
        toughness: 2,
        count: 2,
      },
      weapons: [
        {
          name: 'Bolt Pistol',
          range: 8,
          shots: 3,
          combatStrength: 9,
          armorPiercing: false,
        },
        {
          name: 'Combat Knife',
          range: 'M',
          shots: 2,
          combatStrength: 8,
          armorPiercing: false,
        },
      ],
      abilities: [
        {
          name: 'Surge',
          charges: 1,
          range: '2',
          description: `Until the beginning of your next turn, target infantry unit may move at twice their movement speed.`,
        },
        {
          name: 'Speedheal',
          charges: 2,
          range: 2,
          description: `Heal one target infantry miniature to full health OR heal an entire infantry unit for +1 hit point.`,
        },
      ],
    },
    {
      name: 'Battle Captain',
      image: '/assets/images/marine-captain.jpg',
      stats: {
        movement: 6,
        cost: 15,
        weight: 8,
        toughness: 3,
        count: 1,
      },
      weapons: [
        {
          name: 'Plasma Assault Rifle',
          range: 10,
          shots: 3,
          combatStrength: 8,
          armorPiercing: false,
        },
        {
          name: 'Chainsword',
          range: 0,
          shots: 2,
          combatStrength: 6,
          armorPiercing: false,
        },
        {
          name: 'Grenade Launcher',
          range: 8,
          shots: '1/3',
          combatStrength: 6,
          armorPiercing: true,
        },
      ],
      abilities: [
        {
          name: 'Morale Boost',
          charges: 'Passive',
          range: 6,
          description: `Infantry units in cohesion with this unit gain +1 boost to their combat value`,
        },
      ],
    },
    {
      name: 'Royal Guard',
      image:
        'https://www.belloflostsouls.net/wp-content/uploads/2019/02/female-cadian-astra-militarum.jpg',
      stats: {
        movement: 6,
        cost: 10,
        weight: 10,
        toughness: 1,
        count: 4,
      },
      weapons: [
        {
          name: 'Bolt Rifle',
          range: 24,
          shots: 1,
          combatStrength: 7,
          armorPiercing: false,
        },
      ],
      abilities: [
        {
          name: 'Finest Hour',
          charges: 1,
          range: 'self',
          description: `Until the beginning of your next turn, this unit may fire their Bolt
          Rifle twice as many times and their Bolt Rifle combat value is 6.
          Can only be activated when there are 3 or less units remaining.`,
        },
      ],
    },
    {
      name: 'Royal Guard',
      image:
        'https://www.belloflostsouls.net/wp-content/uploads/2019/02/female-cadian-astra-militarum.jpg',
      stats: {
        movement: 6,
        cost: 10,
        weight: 10,
        toughness: 1,
        count: 4,
      },
      weapons: [
        {
          name: 'Bolt Rifle',
          range: 24,
          shots: 1,
          combatStrength: 7,
          armorPiercing: false,
        },
      ],
      abilities: [
        {
          name: 'Finest Hour',
          charges: 1,
          range: 'self',
          description: `Until the beginning of your next turn, this unit may fire their Bolt
          Rifle twice as many times and their Bolt Rifle combat value is 6.
          Can only be activated when there are 3 or less units remaining.`,
        },
      ],
    },
    {
      name: 'Royal Guard',
      image:
        'https://www.belloflostsouls.net/wp-content/uploads/2019/02/female-cadian-astra-militarum.jpg',
      stats: {
        movement: 6,
        cost: 10,
        weight: 10,
        toughness: 1,
        count: 4,
      },
      weapons: [
        {
          name: 'Bolt Rifle',
          range: 24,
          shots: 1,
          combatStrength: 7,
          armorPiercing: false,
        },
      ],
      abilities: [
        {
          name: 'Finest Hour',
          charges: 1,
          range: 'self',
          description: `Until the beginning of your next turn, this unit may fire their Bolt
          Rifle twice as many times and their Bolt Rifle combat value is 6.
          Can only be activated when there are 3 or less units remaining.`,
        },
      ],
    },
  ];
}

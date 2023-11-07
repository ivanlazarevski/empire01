import { Ability } from './ability.type';
import { StatBlock } from './stat-block.type';
import { Weapon } from './weapon.type';

export type Unit = {
  name: string;
  image: string;
  stats: StatBlock;
  weapons: Weapon[];
  abilities: Ability[];
};

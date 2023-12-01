import { compendium } from './compendium';
import { Type } from './compendium-types';

const ammunition = compendium.compendium.item
    .filter(i => i.type && i.type === Type.A);
const groupedAmmo = Object.groupBy(ammunition, ({ detail }) => detail as string);
console.log(ammunition.slice(0, 10).map(a => a.name), groupedAmmo);

import * as mt19937 from '@stdlib/random-base-mt19937';
import { compendium } from './compendium';
import { Type } from './compendium-types';

const getRandomIntInclusive = (min: number, max: number) => Math.floor(
    (mt19937 as any).normalized()
    *
    (Math.floor(max) - Math.ceil(min) + 1)
    +
    min
);

const ammunition = compendium.compendium.item
    .filter(i => i.type && i.type === Type.A)
    .toSorted(() => getRandomIntInclusive(-1,1));

for (let [index, rawr] of ammunition.entries()) {
    console.info(index + 1, rawr.name);
}
// console.log(ammunition.slice(0, 10).map(a => a.name), groupedAmmo);

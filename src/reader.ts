import { compendium } from './compendium';
import { DmgType, Type } from './compendium-types';

const getRandomIntInclusive = (min: number, max: number) => Math.floor(
    Math.random()
    *
    (Math.floor(max) - Math.ceil(min) + 1)
    +
    min
);

const ammunition = compendium.item
    .filter(i => i.dmgType === DmgType.Necrotic)
    .toSorted(() => getRandomIntInclusive(-1, 1));

for (let [index, rawr] of ammunition.entries()) {
    console.info(index + 1, rawr.name);
}
// console.log(ammunition.slice(0, 10).map(a => a.name), groupedAmmo);

import * as fs from 'fs/promises';
import { type Compendium, Type } from './compendium-types';

(async () => {
    const json = await fs.readFile('./compendium.json');
    const parsed = JSON.parse(json.toString()) as Compendium;

    const ammunition = parsed.compendium.item
        .filter(i => i.type && i.type === Type.A);
    const groupedAmmo = Object.groupBy(ammunition, ({ detail }) => detail!);
    console.log(ammunition.map(a => a.name));
    // console.log(parsed.compendium.item.slice(0, 20));
})();
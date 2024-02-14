import './style.css'
import { renderMap } from "./map/buildMap.ts"
import { buildInventory } from './inventory/inventory.ts';


document.querySelector<HTMLDivElement>('body')!.innerHTML = `
<div class="mapArea"></div>
`
renderMap();






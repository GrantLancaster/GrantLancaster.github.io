import "./buildMap.css"
import { incrementAmount } from "../increment/increment.ts";

export function renderMap() {
    const mapArea = document.querySelector(".mapArea");
    const mapData: Array<any> = buildMap();
    console.log(mapData);
    for (let x = 1; x < mapData[0].length; x++) {
        for (let y = 1; y < mapData.length; y++) {
            let box = document.createElement("div");
            switch (mapData[x][y]) {
                case 0: 
                    box.id = "wood";
                    break
                case 1:
                    box.id = "stone";
                    break
                case 2: 
                    box.id = "dirt"
                    break
            }
            box.addEventListener("click", incrementAmount)
            box.classList.add("materialBox")
            if (mapArea) mapArea.appendChild(box)
        }
    }
}


function buildMap() {
    const width: number = 100; // The height of the generated map
    const height: number = 100; //The width of the generated map
    const mapScale: number = 10;
    let map: Array<any> = []

    for (let y = 0; y < height/mapScale; y++) {
        let row: Array<number> = []
        for (let x = 0; x < width/mapScale; x++) {
            row.push(Math.floor(Math.random() * 3));
        }
        map.push(row)
    }
    return map;
}



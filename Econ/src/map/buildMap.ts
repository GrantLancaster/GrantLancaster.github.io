import "./buildMap.css"
import { incrementAmount } from "../increment/increment.ts";

const width: number = 500; // The height of the generated map
let height: number = width; //The width of the generated map
const mapScale: number = 10;
const tileScaling: number = width/(mapScale);

export function renderMap() {
    const mapArea = document.querySelector(".mapArea") as HTMLElement;
    const mapData: Array<any> = buildMap();
    console.log(mapData);
    for (let x = 0; x < mapData[0].length; x++) {
        for (let y = 0; y < mapData.length; y++) {
            let box = document.createElement("div") as HTMLDivElement;
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
            box.style.height = `${tileScaling}px`;
            box.style.width = `${tileScaling}px`;
            if (mapArea) mapArea.appendChild(box)
        }
    }
    if (mapArea) {
        console.log(mapArea.style);
            mapArea.style.height = `${height}px`;
            mapArea.style.width = `${width}px`;
        }
    }

function checkDigits(n:number) {
    //Code from: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-41.php
    let num:number = 0;
    if (n >= 1) ++num;
    while (n / 10 >= 1) {
        n /= 10;
        ++num;
    }
    let factor:number = Math.pow(10, num-1);
    return factor;
  }
  

function buildMap() {
    let map: Array<any> = []
    for (let y = 0; y < (height/(mapScale * height/checkDigits(height))); y++) {
        let row: Array<number> = []
        for (let x = 0; x < (width/(mapScale * width/checkDigits(width))); x++) {
            row.push(Math.floor(Math.random() * 3));
        }
        map.push(row)
    }
    return map;
}


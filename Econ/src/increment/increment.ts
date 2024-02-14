import player from "../playerInfo.ts";

export function incrementAmount(e:MouseEvent) {
    switch (e.target.id) {
        case "wood":
            player.inventory.wood += 1;
            break
        case "stone":
            player.inventory.stone += 1;
            break
    }
    console.log(player);
    return 
}
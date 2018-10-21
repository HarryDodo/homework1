const hero = {
    name: "Harry Dijkema",
    heroic: true,
    inventory: [1, 2],
    health: 10,
    weapon: {
        type: "bazooka",
        damage: 2
    }
}

function rest(hero) {hero.health = 10
return hero}
function pickUpItem() {}
function equipWeapon() {}

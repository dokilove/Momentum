const player = {
    name:"xoxocopy",
    points:10,
    fat:true,

};

console.log(player);
console.log(player.name);

console.log(player["name"]);

player.fat = false;
player.lastName = "potato";

console.log(player);
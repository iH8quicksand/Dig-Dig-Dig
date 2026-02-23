/* 
Shiloh Sharmahd
Dig Dig Dig!
*/
let config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 768,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config)
// keybinds!
let keyLEFT, keyRIGHT

let leftLaneXPosition = game.config.width * 1/4
let middleLaneXPosition = game.config.width * 2/4
let rightLaneXPosition = game.config.width * 3/4

let highscore = 0
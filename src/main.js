/* 
Shiloh Sharmahd
Dig Dig Dig!

I looked beyond in class code examples with my obstacle management system.
I kept an array of every obstacle on screen, which let loop over every object 
to update them, and have a dynamic amount of obstacles onscreen at once.

I am very pleased with the aesthetic of my sprites. I animated, rendered, and shaded the 3d models in blender.
It took me way to long to get the texture atlas working, but it was worth it!
*/
let config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 1024,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Menu, Play, GameOver ]
}
let game = new Phaser.Game(config)
// keybinds!
let keyLEFT, keyRIGHT, keySPACE

let leftLaneXPosition = game.config.width * 1/4
let middleLaneXPosition = game.config.width * 2/4
let rightLaneXPosition = game.config.width * 3/4

let highscore = 0
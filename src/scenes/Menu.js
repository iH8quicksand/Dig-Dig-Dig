class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.image('starfield', './assets/starfield.png')
        this.load.image('miner', './assets/miner.png')
    }

    create() {
        // define keys
    }

    update() {
        this.scene.start('playScene')
    }
}
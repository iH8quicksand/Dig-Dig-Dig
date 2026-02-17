class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 1080, 768, 'starfield',).setOrigin(0,0)
        this.miner = this.add.tileSprite(leftLaneXPosition, 100, 100, 135, 'miner',).setOrigin(0.5,0.5)
    }

    update() {
        
    }
}
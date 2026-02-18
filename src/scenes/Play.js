class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 1080, 768, 'starfield',).setOrigin(0,0)
        this.miner = this.add.tileSprite(leftLaneXPosition, 100, 100, 135, 'miner',).setOrigin(0.5,0.5)

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            if(minerXposition == rightLANE) {
                minerXposition = middleLANE
            }
            if(minerXposition == middleLANE) {
                minerXposition = leftLANE
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            if(minerXposition == leftLANE) {
                minerXposition = middleLANE
            }
            if(minerXposition == middleLANE) {
                minerXposition = rightLANE
            }
        }
        
    }
}
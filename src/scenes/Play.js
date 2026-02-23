class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 1080, 768, 'starfield',).setOrigin(0,0)
<<<<<<< HEAD

        // add miner
        this.miner = this.add.tileSprite(leftLaneXPosition, 80, 100, 135, 'miner',).setOrigin(0.5,0.5)
=======
        this.miner = this.add.tileSprite(middleLaneXPosition, 100, 100, 135, 'miner',).setOrigin(0.5,0.5)

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            if(this.miner.x == rightLaneXPosition) {
                this.miner.x = middleLaneXPosition
            }
            else if(this.miner.x == middleLaneXPosition) {
                this.miner.x = leftLaneXPosition
            }
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            if(this.miner.x == leftLaneXPosition) {
                this.miner.x = middleLaneXPosition
            }
            else if(this.miner.x == middleLaneXPosition) {
                this.miner.x = rightLaneXPosition
            }
        }
>>>>>>> c0904565e60a6ba708f7b63f84749bbcb3221c47
    }
}
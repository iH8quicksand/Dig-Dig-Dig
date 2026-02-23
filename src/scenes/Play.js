class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        // define downward speed
        this.scrollSpeed = 1
        
        this.background = this.add.tileSprite(0, 0, 1024, 1024, 'rock',).setOrigin(0,0)
        this.shovel = this.add.sprite(middleLaneXPosition, 167, 'shovel').setOrigin(0.5, 0.5)

        // create shovel animation
        this.anims.create({
            key: 'digging',
            frames: this.anims.generateFrameNumbers('shovel', { start: 1, end: 47 }),
            frameRate: 8, // Adjust this to make the animation faster or slower
            repeat: -1     // -1 tells it to loop forever
        })

        // 3. Play the animation!
        this.shovel.play('digging');

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

    }

    update() {
        // player movement
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            if(this.shovel.x == rightLaneXPosition) {
                this.shovel.x = middleLaneXPosition
            }
            else if(this.shovel.x == middleLaneXPosition) {
                this.shovel.x = leftLaneXPosition
            }
        } if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            if(this.shovel.x == leftLaneXPosition) {
                this.shovel.x = middleLaneXPosition
            }
            else if(this.shovel.x == middleLaneXPosition) {
                this.shovel.x = rightLaneXPosition
            }
        }

        // background movement
        this.background.tilePositionY += this.scrollSpeed
    }
}
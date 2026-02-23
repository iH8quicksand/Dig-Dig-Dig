class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        // define downward speed
        this.scrollSpeed = 1
        
        this.background = this.add.tileSprite(0, 0, 1024, 1024, 'rock',).setOrigin(0,0)
        console.log(this.textures.get('shovelAtlas').getFrameNames());
        this.shovel = this.add.sprite(middleLaneXPosition, 167, 'shovelAtlas', 'shovel0001').setOrigin(0.5, 0.5)

        // create shovel animation
        this.anims.create({
            key: 'digging',
            frames: this.anims.generateFrameNames('shovelAtlas', {
                prefix: 'shovel', 
                suffix: '.png',   
                start: 1,         
                end: 46           
            }),
            frameRate: 24, 
            repeat: -1
        });
        this.shovel.play('digging')

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
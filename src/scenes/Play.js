class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        // define downward speed
        this.scrollSpeed = 1
        
        // create background and shovel
        this.background = this.add.tileSprite(0, 0, 1024, 1024, 'rock',).setOrigin(0,0)
        this.shovel = this.add.sprite(middleLaneXPosition, 167, 'shovelAtlas', 'shovel0001').setOrigin(0.5, 0.5)

        // create shovel animation
        this.anims.create({
            key: 'digging',
            frames: this.anims.generateFrameNames('shovelAtlas', {
                prefix: 'shovel', 
                start: 1,
                end: 46,        
                zeroPad: 4
            }),
            frameRate: 24, 
            repeat: -1
        });
        this.shovel.play('digging')

        // create tnt animation
        this.anims.create({
            key: 'bombing',
            frames: this.anims.generateFrameNames('tntAtlas', {
                prefix: 'basicTNT', 
                start: 1,         
                end: 46,        
                zeroPad: 4
            }),
            frameRate: 24, 
            repeat: -1
        });

        // create oil animation
        this.anims.create({
            key: 'oil',
            frames: this.anims.generateFrameNames('oilAtlas', {
                prefix: 'oil', 
                start: 1,         
                end: 46,        
                zeroPad: 4
            }),
            frameRate: 12, 
            repeat: -1
        });

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        // array of possible lanes
        this.lanes = [leftLaneXPosition, middleLaneXPosition, rightLaneXPosition]

        // array of onscreen objects
        this.activeItems = []

        // timer that calls spawn function
        this.spawnTimer = this.time.addEvent({
            delay: 2800,
            callback: this.spawnItem,
            callbackScope: this,
            loop: true
        })


        // game tacking variables
        this.meters = 0
        this.oilCount = 0

        // add UI
        textConfig = {
            fontFamily: 'Arial',
            fontSize: '28px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        }

        this.meterText = this.add.text(20, 20, 'Depth: 0m', textConfig).setDepth(10)
        this.oilText = this.add.text(20, 64, 'Oil: 0 gal', textConfig).setDepth(10)
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

        // update UI
        this.meters += this.scrollSpeed / 10
        this.meterText.text = `Depth: ${Math.floor(this.meters)}m`
        this.oilText.text = `Oil: ${this.oilCount} gal`

        // loop over all items and update them
        for (let i = 0; i < this.activeItems.length; i++) {
            let item =this.activeItems[i]

            item.moveSpeed = this.scrollSpeed
            item.update()

            if (this.checkCollision(this.shovel, item)) {
                if (item instanceof Oil) {
                    this.collectOil
                } else if (item instanceof Bomb) {
                    console.log("BOOOOM!")
                }

                item.destroy()
                this.activeItems.splice(i, 1)
                i--
            }

            if (item.y < -67) {
                item.destroy()
                this.activeItems.splice(i, 1)
                i--
            }

        }
    }

    spawnItem() {
        let randomX = Phaser.Math.RND.pick(this.lanes)

        let startY = game.config.height + 100

        let isBomb = Math.random() > 0.5

        let newItem

        if(isBomb) {
            newItem = new Bomb(this, randomX, startY, 'tntAtlas', 'tnt0001')
        }
        else {
            newItem = new Oil(this, randomX, startY, 'oilAtlas', 'oil0001')
        }

        this.activeItems.push(newItem)
    }

    checkCollision(spriteA, spriteB) {
        let boundsA = spriteA.getBounds()
        let boundsB = spriteB.getBounds()
        return Phaser.Geom.Intersects.RectangletoRectangle(boundsA, boundsB)
    }

    collection() {
        this.oilCount += 1
        if (this.oilCount % 10 === 0) {
            this.scrollSpeed += 0.1
            console.log(`speed: ${this.scrollSpeed}`)
        }
    }
}
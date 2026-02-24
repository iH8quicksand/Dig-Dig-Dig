class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.image('menu', './assets/DigDigDigMenu.png')
        this.load.image('background1', './assets/backgrounds/rock.jpg')
        this.load.atlas('shovelAtlas', './assets/spritesheet.png', './assets/sprites.json')
        this.load.atlas('tntAtlas', './assets/tntspritesheet.png', './assets/tntsprites.json')
        this.load.atlas('oilAtlas', './assets/oilspritesheet.png', './assets/oilsprites.json')

        // load music
        this.load.audio('bgm', './assets/teddybeast6-desert-rose-loop-180328.mp3')
        this.load.audio('drop', './assets/water-drop-single-short-clear.mp3')
        this.load.audio('explosion', './assets/freesound_community-medium-explosion-40472.mp3')
    }

    create() {
        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        this.add.sprite(512, 512, 'menu').setOrigin(0.5, 0.5)
    }

    update() {
        if (keySPACE.isDown) {
            this.scene.start('playScene')
        }
    }
}
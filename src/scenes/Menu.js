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
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        config = {
            fontFamily: 'Arial',
            fontSize: '28px',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
        }

        this.add.text(game.config.width/2, game.config.height/2 - 64, 'Dig Dig Dig', config).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2, 'Press SPACE to Start', config).setOrigin(0.5)
    }

    update() {
        if (keySPACE.isDown) {
            this.scene.start('playScene')
        }
    }
}
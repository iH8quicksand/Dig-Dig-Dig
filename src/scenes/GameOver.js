class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene")
    }

    init(data) {
        this.finalDepth = data.meters || 0
    }

    create() {
        // define keys for restarting
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        const titleConfig = {
            fontFamily: 'Arial',
            fontSize: '64px',
            color: '#FF0000',
            align: 'center',
            fontStyle: 'bold'
        }

        const scoreConfig = {
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#FFFFFF',
            align: 'center',
        }

        const creditConfig = {
            fontFamily: 'Arial',
            fontSize: '18px',
            color: '#CCCCCC',
            align: 'center',
            lineSpacing: 10
        }

        this.add.text(game.config.width / 2, 200, 'GAME OVER', titleConfig).setOrigin(0.5)
        this.add.text(game.config.width / 2, 300, `Final Depth: ${this.finalDepth}m`, scoreConfig).setOrigin(0.5)

        const creditsText = 
            "CREDITS\n\n" +
            "TNT modeled by Blender3D\n" +
            "Shovel modeled by AspectStudios\n" +
            "Stone texture from PolyHaven\n" +
            "Explosion SFX by freesound_community (Pixabay)\n" +
            "Drop SFX by SoundDino\n" +
            "Music by Elias Allen (Pixabay)";

        this.add.text(game.config.width / 2, 550, creditsText, creditConfig).setOrigin(0.5)

        this.add.text(game.config.width / 2, 900, 'Press SPACE to return to Menu', scoreConfig).setOrigin(0.5)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('menuScene')
        }
    }
}
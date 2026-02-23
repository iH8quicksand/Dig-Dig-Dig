class Bomb extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.moveSpeed = game.settings.
    }

    update() {
        // move bomb up
        this.y -= this.moveSpeed
    }

    // reset position
    reset() {
        this.x = game.config.width
    }
}
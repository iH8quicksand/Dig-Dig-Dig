class Oil extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.moveSpeed = scene.scrollSpeed

        this.play('oil');
    }

    update() {
        // move oil up
        this.y -= this.moveSpeed
    }
}